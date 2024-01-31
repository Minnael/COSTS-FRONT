import './styles.css'
import porquinho from '../../../assets/savings.svg'
import LinkButton from '../../Layout/LinkButton/LinkButton'

function Home(){
   return (
      <section className='home-container'>
         <h1>BEM-VINDO AO <span>COSTS</span></h1>
         <p>COMECE A GERENCIAR OS SEUS PROJETOS AGORA MESMO!</p>
         <LinkButton to='/criarProjeto' text='CRIAR PROJETO'/>
         <img src={porquinho} alt="COSTS"/>
      </section>
   )
}
export default Home

