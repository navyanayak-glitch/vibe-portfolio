import { Suspense, lazy } from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import { motion } from 'framer-motion'

const HeroScene = lazy(() => import('./HeroScene.jsx'))

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <Box
      id="home"
      component="section"
      aria-label="Introduction"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        px: { xs: 2.5, md: 6 },
        pt: { xs: 12, md: 0 }
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        spacing={{ xs: 6, md: 4 }}
        sx={{ width: '100%', maxWidth: 1320, mx: 'auto' }}
      >
        <Box sx={{ maxWidth: 620 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Typography
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.82rem',
                color: 'primary.main',
                mb: 2
              }}
            >
              Hello, I'm
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.1rem' }, lineHeight: 1.05, mb: 2.5 }}
            >
              Navya Nayak
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, mb: 2.5 }}>
              Computer Science Student · Developer · Problem Solver
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7, mb: 4.5, maxWidth: 520 }}>
              I build modern digital experiences, intelligent applications, and practical software solutions.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" color="primary" size="large" onClick={() => scrollTo('projects')}>
                View Projects
              </Button>
              <Button variant="outlined" size="large" onClick={() => scrollTo('contact')}>
                Contact Me
              </Button>
            </Stack>
          </motion.div>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', md: 480 },
            height: { xs: 340, md: 480 },
            position: 'relative'
          }}
        >
          <Suspense
            fallback={
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'text.secondary',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.8rem'
                }}
              >
                loading scene…
              </Box>
            }
          >
            <HeroScene />
          </Suspense>
        </Box>
      </Stack>
    </Box>
  )
}
