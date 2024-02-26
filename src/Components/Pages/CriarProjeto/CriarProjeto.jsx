import './styles.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../Form/Input/Input.jsx'
import Select from '../../Form/Select/Select.jsx'
import SubmitButton from '../../Form/SubmitButton/SubmitButton.jsx'


function CriarProjeto(){
   const [categories, setCategorias] = useState([]);
   const [novoProjeto, setNovoProjeto] = useState({nome: '', orcamento: '', categoria: ''})

   useEffect(() => {
      carregarCategorias();
   }, []);

   const carregarCategorias = () => {
      axios.get('http://localhost:8800/categorias')
      .then(response => setCategorias(response.data))
      .catch(error => console.error(error));
   };

   const adicionarProjeto = () => {
      axios.post('http://localhost:8800/projetos', novoProjeto)
        .then(response => {
          console.log('Dado adicionado com sucesso:', response.data);
          toast.success('Projeto criado com sucesso!');
        })
        .catch(error => console.error('Erro ao adicionar dado:', error));
    };

   return(
      <div className='criar-container'>
         <h1>CRIAR PROJETO</h1>
         <p>CRIE SEU PROJETO PARA DEPOIS ADICIONAR OS SERVIÇOS</p>
         <form className='form'>
            <ToastContainer position="bottom-right" theme="colored"/>
               <Input type='text' text='NOME DO PROJETO' name='name' placeholder='INSIRA O NOME DO PROJETO'
                  onChange={(e) => setNovoProjeto({...novoProjeto, nome: e.target.value})}/>    

               <Input type='number' text='ORÇAMENTO DO PROJETO' name='budget' placeholder='INSIRA O ORÇAMENTO TOTAL'
                  onChange={(e) => setNovoProjeto({...novoProjeto, orcamento: e.target.value})} />

               <Select name='category-id' text='SELECIONE A CATEGORIA' options={categories}
                  onChange={(e) => setNovoProjeto({...novoProjeto, categoria: e.target.value})}/>

               <SubmitButton to="/projetos" adicionarProjeto={adicionarProjeto} text='CRIAR PROJETO'/>
         </form>
      </div>
   )
}
export default CriarProjeto