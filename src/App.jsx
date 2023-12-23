import About from './component/About'
import Home from './component/Home'
import Project from './component/Project'
import Skills from './component/Skills'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
  
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/Projects' element={<Project />} />
      <Route path='/Skills' element={  <Skills />} />
      <Route path='/About' element={ <About /> } />
    </Routes>
    
  )
}

export default App
