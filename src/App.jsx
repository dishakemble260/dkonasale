import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Landing}/>
    </Routes>
 
    </BrowserRouter>
  )
}

export default App
