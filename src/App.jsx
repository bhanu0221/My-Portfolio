import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Memories from './components/Memories'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
 
function App() {


  return (
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
          <Route path="/memories" element={<Memories/>}/>
        </Routes>
        <Footer />
      </div>
  )
}

export default App;
