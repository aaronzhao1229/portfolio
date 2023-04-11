import { Outlet } from 'react-router-dom'
import './App.css'
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
      dark: '#ff9800',
      contrastText: '#000',
    }
  //   background: {
  //     default: '#e0e0e0'
  // },
  
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              backgroundColor: '#e0e0e0',
              backgroundImage: 'linear-gradient(90deg,  #fff3e0 5%, #eeeeee 50%, #eeeeee, 70%, #fff3e0 100%)'
            },
          }
    }},
  
  } 
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <CssBaseline />
      <Header />
      
      <Outlet />
      
      
    </ThemeProvider>
  )
}

export default App
