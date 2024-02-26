import './styles.css'
import {Link} from 'react-router-dom'

function SubmitButton({text, adicionarProjeto, to}){
   return (
      <div>
         <Link to={to} onClick={() => adicionarProjeto()} className='button'>{text}</Link>
      </div>
   )
}

export default SubmitButton