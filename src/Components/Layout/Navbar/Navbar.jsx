import {Link} from 'react-router-dom'
import './styles.css'
import Container from '../Container/Container'
import logo from '../../../assets/costs_logo.png'

function Navbar(){
   return (
      <nav className='navbar'>
         <Container>
            <Link to="/"><img src={logo} alt="COSTS"/></Link>
            <ul className='list'>
               <li className='item'><Link to="/">Home</Link></li>
               <li className='item'><Link to="/projetos">Projetos</Link></li>
               <li className='item'><Link to="/empresa">Empresa</Link></li>
               <li className='item'><Link to="/contatos">Contatos</Link></li>
               <li className='item'><Link to="/criarProjeto">Criar Projeto</Link></li>
            </ul>
         </Container>
      </nav>
   )
}

export default Navbar