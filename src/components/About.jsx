import { useEffect, useRef, useState } from 'react'
import { Box, Typography, Grid, Paper } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { stats } from '../data/experience.js'

function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 900
    const start = performance.now()
    let frame
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.round(progress * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <Typography ref={ref} variant="h3" sx={{ fontSize: '2.4rem' }}>
      {count}
    </Typography>
  )
}

export default function About() {
  return (
    <Box id="about" component="section" aria-label="About" sx={{ px: { xs: 2.5, md: 6 }, py: { xs: 10, md: 14 } }}>
      <Box sx={{ maxWidth: 1320, mx: 'auto' }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' }, mb: 3 }}>
                About
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 480 }}>
                I'm a passionate computer science student interested in software development, artificial
                intelligence, data, and interactive technologies. I enjoy turning ideas into practical and
                visually engaging applications.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {stats.map((s, i) => (
                <Grid item xs={6} key={s.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Paper
                      variant="outlined"
                      sx={{
                        p: 3,
                        backgroundColor: 'background.paper',
                        borderColor: 'divider',
                        height: '100%'
                      }}
                    >
                      <Counter value={s.value} />
                      <Typography sx={{ color: 'text.secondary', fontSize: '0.88rem', mt: 0.5 }}>
                        {s.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
