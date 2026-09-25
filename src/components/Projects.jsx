import { Box, Typography, Grid, Paper, Chip, Stack, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import { motion } from 'framer-motion'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <Box id="projects" component="section" aria-label="Projects" sx={{ px: { xs: 2.5, md: 6 }, py: { xs: 10, md: 14 } }}>
      <Box sx={{ maxWidth: 1320, mx: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' }, mb: 1 }}>
            Projects
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 6, maxWidth: 520 }}>
            A selection of things I've built, spanning web apps, AI concepts, and systems work.
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {projects.map((p, i) => (
            <Grid item xs={12} md={6} key={p.id}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: '100%' }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    p: 3.5,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    borderColor: 'divider',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.2s ease, transform 0.25s ease',
                    '&:hover': { borderColor: 'primary.main', transform: 'translateY(-4px)' }
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 1.25 }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.65, mb: 2.5, flexGrow: 1 }}>
                    {p.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2.5 }}>
                    {p.tech.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '0.72rem',
                          backgroundColor: 'transparent',
                          border: '1px solid',
                          borderColor: 'divider',
                          color: 'text.secondary',
                          borderRadius: '6px'
                        }}
                      />
                    ))}
                  </Stack>
                  <Stack direction="row" spacing={1.5}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon fontSize="small" />}
                      href={p.github}
                      variant="outlined"
                    >
                      Code
                    </Button>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon fontSize="small" />}
                      href={p.demo}
                      variant="text"
                      sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                    >
                      Live Demo
                    </Button>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
