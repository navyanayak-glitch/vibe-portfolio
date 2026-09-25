import { useEffect, useState } from 'react'
import { Fab, Zoom } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Zoom in={visible}>
      <Fab
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        size="medium"
        sx={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 150,
          backgroundColor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          color: 'primary.main',
          boxShadow: 'none',
          '&:hover': { backgroundColor: 'background.paper', borderColor: 'primary.main' }
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  )
}
