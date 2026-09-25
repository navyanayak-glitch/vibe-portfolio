import { useState } from 'react'
import { Box, Typography, Grid, TextField, Button, Stack, Snackbar, Alert, Link } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import { motion } from 'framer-motion'

const initialForm = { name: '', email: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Enter your name'
  if (!form.email.trim()) {
    errors.email = 'Enter your email'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email'
  }
  if (!form.message.trim()) errors.message = 'Write a short message'
  else if (form.message.trim().length < 10) errors.message = 'Message is a little short'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [snackOpen, setSnackOpen] = useState(false)

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSnackOpen(true)
      setForm(initialForm)
    }
  }

  return (
    <Box id="contact" component="section" aria-label="Contact" sx={{ px: { xs: 2.5, md: 6 }, py: { xs: 10, md: 14 } }}>
      <Box sx={{ maxWidth: 1320, mx: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' }, mb: 6, maxWidth: 520 }}>
            Let's Build Something Together.
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 6, md: 10 }}>
          <Grid item xs={12} md={5}>
            <Stack spacing={2.5}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailOutlinedIcon sx={{ color: 'primary.main' }} fontSize="small" />
                <Link href="mailto:[YOUR EMAIL]" underline="hover" sx={{ color: 'text.primary' }}>
                  [YOUR EMAIL]
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <GitHubIcon sx={{ color: 'primary.main' }} fontSize="small" />
                <Link href="[GITHUB URL]" underline="hover" sx={{ color: 'text.primary' }}>
                  github.com/[your-username]
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LinkedInIcon sx={{ color: 'primary.main' }} fontSize="small" />
                <Link href="[LINKEDIN URL]" underline="hover" sx={{ color: 'text.primary' }}>
                  linkedin.com/in/[your-username]
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PlaceOutlinedIcon sx={{ color: 'primary.main' }} fontSize="small" />
                <Typography sx={{ color: 'text.primary' }}>[LOCATION]</Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Stack spacing={2.5}>
                <TextField
                  label="Name"
                  value={form.name}
                  onChange={handleChange('name')}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                  fullWidth
                  required
                />
                <TextField
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  fullWidth
                  required
                />
                <TextField
                  label="Message"
                  value={form.message}
                  onChange={handleChange('message')}
                  error={Boolean(errors.message)}
                  helperText={errors.message}
                  fullWidth
                  required
                  multiline
                  minRows={4}
                />
                <Box>
                  <Button type="submit" variant="contained" color="primary" size="large">
                    Send Message
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Snackbar open={snackOpen} autoHideDuration={4000} onClose={() => setSnackOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" variant="filled" onClose={() => setSnackOpen(false)} sx={{ width: '100%' }}>
          Message sent — I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  )
}
