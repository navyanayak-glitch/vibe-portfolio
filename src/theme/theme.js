import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a0c',
      paper: '#131316'
    },
    text: {
      primary: '#f5f5f2',
      secondary: '#9a9a9e'
    },
    primary: {
      main: '#e8ab4f',
      contrastText: '#0a0a0c'
    },
    divider: 'rgba(245, 245, 242, 0.1)'
  },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    h1: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, letterSpacing: '-0.02em' },
    h2: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, letterSpacing: '-0.015em' },
    h3: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, letterSpacing: '-0.01em' },
    h4: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    h5: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 },
    h6: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 },
    button: { textTransform: 'none', fontWeight: 500, letterSpacing: 0 }
  },
  shape: {
    borderRadius: 10
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 22px',
          boxShadow: 'none'
        },
        containedPrimary: {
          '&:hover': { boxShadow: '0 0 0 1px rgba(232,171,79,0.4)' }
        },
        outlined: {
          borderColor: 'rgba(245,245,242,0.18)',
          '&:hover': { borderColor: '#e8ab4f', background: 'rgba(232,171,79,0.06)' }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  }
})

export default theme
