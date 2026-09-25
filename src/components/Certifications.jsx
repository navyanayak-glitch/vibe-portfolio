import { Box, Typography, Grid, Paper, Link } from '@mui/material'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import { motion } from 'framer-motion'
import { certifications } from '../data/experience.js'

export default function Certifications() {
  return (
    <Box
      id="certifications"
      component="section"
      aria-label="Achievements and certifications"
      sx={{ px: { xs: 2.5, md: 6 }, py: { xs: 10, md: 14 } }}
    >
      <Box sx={{ maxWidth: 1320, mx: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' }, mb: 6 }}>
            Achievements & Certifications
          </Typography>
        </motion.div>

        <Grid container spacing={2.5}>
          {certifications.map((c, i) => (
            <Grid item xs={12} sm={6} md={3} key={c.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: '100%' }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2.75,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    borderColor: 'divider',
                    transition: 'border-color 0.2s ease',
                    '&:hover': { borderColor: 'primary.main' }
                  }}
                >
                  <WorkspacePremiumOutlinedIcon sx={{ color: 'primary.main', mb: 1.5 }} />
                  <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.98rem', mb: 0.5 }}>
                    {c.name}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', mb: 0.25 }}>{c.issuer}</Typography>
                  <Typography sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'text.secondary', mb: c.link ? 1 : 0 }}>
                    {c.year}
                  </Typography>
                  {c.link && (
                    <Link href={c.link} underline="hover" sx={{ fontSize: '0.82rem', color: 'primary.main' }}>
                      Verify
                    </Link>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
