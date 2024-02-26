import './styles.css'
import axios from 'axios'
import {FaTrash, FaEdit} from "react-icons/fa"

function Card({nome, orcamento, categoria, id}){

   const apagarProjeto = (id) => {
      axios.delete(`http://localhost:8800/projetos/${id}`)
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
         <p>Categoria: {categoria}</p>
         <div className='icones'>
            <FaEdit className='editar'/>
            <FaTrash className='lixeira' onClick={() => apagarProjeto(id)}/>
         </div>
      </div>
   )
}

export default Card