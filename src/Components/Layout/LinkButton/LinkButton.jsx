import { Link } from 'react-router-dom'
import './styles.css'

function LinkButton({to, text}){
   return (
      <Link className='button' to={to}>{text}</Link>
   )
}

export default LinkButton