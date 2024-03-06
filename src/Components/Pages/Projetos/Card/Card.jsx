import './styles.css'
import axios from 'axios'
import {FaTrash, FaEdit} from "react-icons/fa"
import Bolinha from '../Bolinha/Bolinha';

function Card({nome, orcamento, categoria, id}){

   const apagarProjeto = (id) => {
      axios.delete(`https://costs-back.vercel.app/projetos/${id}`)
        .then(response => {
            console.log('Registro excluído com sucesso:', response.data);
        })
        .catch(error => console.error('Erro ao excluir registro:', error));
   };

   return (
      <div className="card-container">
         <div className='titulo-projeto'>
            <h1>{nome}</h1>
         </div>
         <span>Orçamento: R${orcamento}</span>
         <p><Bolinha categoria={categoria}/>{categoria}</p>
         <div className='botoes'>
            <button type='button' className='button-one'> <FaEdit className='editar'/> EDITAR</button>
            <button type='button' className='button-two'> <FaTrash className='lixeira'/> APAGAR</button>
         </div>
      </div>
   )
}

export default Card