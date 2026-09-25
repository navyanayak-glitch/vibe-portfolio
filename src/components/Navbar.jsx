import { useEffect, useState } from 'react'
import { Box, Stack, Typography, IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setDrawerOpen(false)
  }

  return (
    <Box
      component="nav"
      aria-label="Primary"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        px: { xs: 2.5, md: 6 },
        py: scrolled ? 1.5 : 2.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background-color 0.3s ease, padding 0.3s ease, border-color 0.3s ease',
        backgroundColor: scrolled ? 'rgba(10,10,12,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'var(--border, rgba(245,245,242,0.1))' : 'transparent'
      }}
    >
      <Typography
        component="button"
        onClick={() => scrollTo('home')}
        sx={{
          font: 'inherit',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '1.1rem',
          color: 'text.primary',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          letterSpacing: '-0.01em'
        }}
      >
        Navya Nayak
      </Typography>

      <Stack
        direction="row"
        spacing={0.5}
        sx={{ display: { xs: 'none', md: 'flex' } }}
        role="list"
      >
        {links.map((l) => (
          <Box
            key={l.id}
            component="button"
            role="listitem"
            onClick={() => scrollTo(l.id)}
            aria-current={active === l.id ? 'page' : undefined}
            sx={{
              font: 'inherit',
              fontSize: '0.92rem',
              color: active === l.id ? 'text.primary' : 'text.secondary',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              px: 1.75,
              py: 0.75,
              position: 'relative',
              transition: 'color 0.2s ease',
              '&:hover': { color: 'text.primary' },
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 14,
                right: 14,
                bottom: 0,
                height: '1px',
                backgroundColor: 'primary.main',
                opacity: active === l.id ? 1 : 0,
                transition: 'opacity 0.2s ease'
              }
            }}
          >
            {l.label}
          </Box>
        ))}
      </Stack>

      <IconButton
        aria-label="Open menu"
        onClick={() => setDrawerOpen(true)}
        sx={{ display: { xs: 'inline-flex', md: 'none' }, color: 'text.primary' }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 260, backgroundColor: 'background.paper', borderLeft: '1px solid', borderColor: 'divider' }
        }}
      >
        <Stack direction="row" justifyContent="flex-end" p={1.5}>
          <IconButton aria-label="Close menu" onClick={() => setDrawerOpen(false)} sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <List>
          {links.map((l) => (
            <ListItemButton key={l.id} onClick={() => scrollTo(l.id)} selected={active === l.id}>
              <ListItemText primary={l.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
