import './styles.css'
import ProjectForm from '../../Project/ProjectForm/ProjectForm.jsx'

function CriarProjeto(){
   return(
      <div className='criar-container'>
         <h1>CRIAR PROJETO</h1>
         <p>CRIE SEU PROJETO PARA DEPOIS ADICIONAR OS SERVIÇOS</p>
         <ProjectForm button_text='CRIAR PROJETO'/>
      </div>
   )
}
export default CriarProjeto