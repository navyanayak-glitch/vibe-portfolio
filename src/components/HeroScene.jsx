import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

function Particles({ count, reduced }) {
  const pointsRef = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 1.4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (reduced || !pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#e8ab4f" transparent opacity={0.55} sizeAttenuation />
    </points>
  )
}

function CrystalCore({ mouse, reduced, detail }) {
  const groupRef = useRef()
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (!groupRef.current) return
    if (!reduced) {
      groupRef.current.rotation.y += delta * 0.12
      groupRef.current.rotation.x += delta * 0.03
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.12
    }
    const targetX = mouse.current.y * 0.25
    const targetY = mouse.current.x * 0.35
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.02
    if (!reduced) {
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.005
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, detail]} />
        <meshPhysicalMaterial
          color="#131316"
          metalness={0.3}
          roughness={0.15}
          transmission={0.55}
          thickness={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.4}
          emissive="#e8ab4f"
          emissiveIntensity={0.04}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.6, detail]} />
        <meshBasicMaterial color="#e8ab4f" wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  )
}

function Scene() {
  const { size } = useThree()
  const reduced = useReducedMotion()
  const isMobile = useIsMobile()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  const particleCount = isMobile ? 220 : 700
  const detail = isMobile ? 0 : 1

  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 4]} intensity={1.1} color="#e8ab4f" />
      <pointLight position={[-4, -2, -3]} intensity={0.4} color="#5b8def" />
      <CrystalCore mouse={mouse} reduced={reduced} detail={detail} />
      {!isMobile && <Particles count={particleCount} reduced={reduced} />}
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%', touchAction: 'none' }}
    >
      <Scene />
    </Canvas>
  )
}
