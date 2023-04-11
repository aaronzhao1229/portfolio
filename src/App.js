import './App.css'
import HomePage from './components/HomePage'
import Header from './layout/Header'
import { ThemeProvider, CssBaseline } from '@mui/material'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#fafafa',
      main: '#fff',
      dark: '#e0e0e0',
      contrastText: '#3c3c3c',
    },
    secondary: {
      light: '#ffecb3',
      main: '#ffc107',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {
      default: '#e0e0e0'
  }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <CssBaseline />
      <Header />
      
      <HomePage />
      
      
    </ThemeProvider>
  )
}

export default App
