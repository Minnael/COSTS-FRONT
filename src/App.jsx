import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Pages/Navbar/Navbar.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import Projetos from './Components/Pages/Projetos/Projetos.jsx'
import Contatos from './Components/Pages/Contatos/Contatos.jsx'
import Empresa from './Components/Pages/Empresa/Empresa.jsx'
import Container from './Components/Layout/Container.jsx'
  
function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
          <Route path="/empresa" element={<Empresa/>}/>
          <Route path="/contatos" element={<Contatos/>}/>
        </Routes>
      </Container>
    </Router>
  )
}
export default App
