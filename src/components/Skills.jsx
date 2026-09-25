import { useRef } from 'react'
import { Box, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills.js'

function SkillCard({ name, detail }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(0)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <Paper
      ref={ref}
      variant="outlined"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      tabIndex={0}
      sx={{
        p: 2.5,
        backgroundColor: 'background.paper',
        borderColor: 'divider',
        height: '100%',
        transition: 'transform 0.15s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        willChange: 'transform',
        '&:hover, &:focus-visible': {
          borderColor: 'primary.main',
          boxShadow: '0 0 24px -8px rgba(232,171,79,0.35)'
        }
      }}
    >
      <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1rem', mb: 0.5 }}>
        {name}
      </Typography>
      <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.5 }}>{detail}</Typography>
    </Paper>
  )
}

export default function Skills() {
  return (
    <Box id="skills" component="section" aria-label="Skills" sx={{ px: { xs: 2.5, md: 6 }, py: { xs: 10, md: 14 } }}>
      <Box sx={{ maxWidth: 1320, mx: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' }, mb: 1 }}>
            Skills
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 6, maxWidth: 520 }}>
            Tools and languages I reach for regularly, grouped by where they're used.
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 5, md: 6 }}>
          {skillCategories.map((cat) => (
            <Grid item xs={12} md={6} key={cat.id}>
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.78rem',
                  color: 'text.secondary',
                  mb: 2
                }}
              >
                {cat.label}
              </Typography>
              <Grid container spacing={1.5}>
                {cat.items.map((item) => (
                  <Grid item xs={6} key={item.name}>
                    <SkillCard name={item.name} detail={item.detail} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
