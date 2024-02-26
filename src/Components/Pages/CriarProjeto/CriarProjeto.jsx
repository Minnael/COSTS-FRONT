import './styles.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
import Input from '../../Form/Input/Input.jsx'
import Select from '../../Form/Select/Select.jsx'
import SubmitButton from '../../Form/SubmitButton/SubmitButton.jsx'


function CriarProjeto(){
   const [categories, setCategorias] = useState([]);

   useEffect(() => {
      carregarCategorias();
   }, []);

   const carregarCategorias = () => {
      axios.get('http://localhost:8800/categorias')
      .then(response => setCategorias(response.data))
      .catch(error => console.error(error));
   };

   return(
      <div className='criar-container'>
         <h1>CRIAR PROJETO</h1>
         <p>CRIE SEU PROJETO PARA DEPOIS ADICIONAR OS SERVIÇOS</p>
         <form className='form'>
            <Input type='text' text='NOME DO PROJETO' name='name'placeholder='INSIRA O NOME DO PROJETO'/> 
            <Input type='number' text='ORÇAMENTO DO PROJETO' name='budget' placeholder='INSIRA O ORÇAMENTO TOTAL'/>
            <Select name='category-id' text='SELECIONE A CATEGORIA' options={categories}/>
            <SubmitButton text='CRIAR PROJETO'/>
         </form>
      </div>
   )
}
export default CriarProjeto