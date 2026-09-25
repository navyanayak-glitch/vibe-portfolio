import { Box, Typography, Stack, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        px: { xs: 2.5, md: 6 },
        py: 5,
        borderTop: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2
      }}
    >
      <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
        <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>Navya Nayak</Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.82rem' }}>
          Designed & built with React, Three.js & MUI.
        </Typography>
      </Box>

      <Stack direction="row" spacing={0.5}>
        <IconButton aria-label="GitHub" href="[GITHUB URL]" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
          <GitHubIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="LinkedIn" href="[LINKEDIN URL]" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
          <LinkedInIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Email" href="mailto:[YOUR EMAIL]" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
          <EmailOutlinedIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Typography sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
        © {new Date().getFullYear()} Navya Nayak. All rights reserved.
      </Typography>
    </Box>
  )
}
