import logo from './logo.svg'
import './App.css'
import Header from './component/Header'
import { Container } from '@mui/material'

function App() {
  return (
    <div className="App">
      <Header />
      <Container>Hey world!</Container>
    </div>
  )
}

export default App
