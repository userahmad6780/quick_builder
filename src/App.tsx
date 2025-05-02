import { Route, Routes } from 'react-router-dom'
import Resume from './pages/Resume'
import AppBar from './components/AppBar'
import Home from './pages/Home'
import Editor from './pages/Editor'

function App() {
  return (
    <div className="bg-white">
      <AppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume/:template" element={<Editor />} />
      </Routes>
    </div>
  )
}

export default App