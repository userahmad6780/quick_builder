import { Route, Routes } from 'react-router-dom'
import Resume from './pages/Resume'
import AppBar from './components/AppBar'
import Home from './pages/Home'

function App() {
  return (
    <div className="bg-white">
      <AppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App