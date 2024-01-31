import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar/Navbar.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import Projetos from './Components/Pages/Projetos/Projetos.jsx'
import Contatos from './Components/Pages/Contatos/Contatos.jsx'
import Empresa from './Components/Pages/Empresa/Empresa.jsx'
import Container from './Components/Layout/Container/Container.jsx'
import Footer from './Components/Layout/Footer/Footer.jsx'
import CriarProjeto from './Components/Pages/CriarProjeto/CriarProjeto.jsx'
  
function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/projetos" element={<Projetos/>}/>
          <Route exact path="/empresa" element={<Empresa/>}/>
          <Route exact path="/contatos" element={<Contatos/>}/>
          <Route exact path="/criarProjeto" element={<CriarProjeto/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}
export default App
