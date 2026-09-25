import { Box, Typography, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import { timeline } from '../data/experience.js'

export default function Experience() {
  return (
    <Box id="experience" component="section" aria-label="Experience and education" sx={{ px: { xs: 2.5, md: 6 }, py: { xs: 10, md: 14 } }}>
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' }, mb: 6 }}>
            Experience & Education
          </Typography>
        </motion.div>

        <Stack sx={{ position: 'relative', pl: { xs: 3, md: 4 } }}>
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              left: { xs: 5, md: 6 },
              top: 6,
              bottom: 6,
              width: '1px',
              backgroundColor: 'divider'
            }}
          />
          {timeline.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box sx={{ position: 'relative', pb: i === timeline.length - 1 ? 0 : 5 }}>
                <Box
                  aria-hidden="true"
                  sx={{
                    position: 'absolute',
                    left: { xs: -25, md: -34 },
                    top: 6,
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    backgroundColor: 'background.default',
                    border: '2px solid',
                    borderColor: 'primary.main'
                  }}
                />
                <Typography
                  sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'primary.main', mb: 0.75 }}
                >
                  {item.date}
                </Typography>
                <Typography variant="h6" sx={{ mb: 0.25 }}>
                  {item.role}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', mb: 1 }}>{item.org}</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 560 }}>
                  {item.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
