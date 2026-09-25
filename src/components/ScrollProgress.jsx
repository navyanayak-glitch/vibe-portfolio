import { useEffect, useState } from 'react'
import { Box } from '@mui/material'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${progress}%`,
        backgroundColor: 'primary.main',
        zIndex: 200,
        transition: 'width 0.1s linear'
      }}
    />
  )
}
