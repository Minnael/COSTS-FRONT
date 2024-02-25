import {useEffect, useState} from 'react'
import './styles.css'
import Input from '../../Form/Input/Input.jsx'
import Select from '../../Form/Select/Select.jsx'
import SubmitButton  from '../../Form/SubmitButton/SubmitButton.jsx'

function ProjectForm({button_text}){
   const [categories, setCategories] = useState([])

   useEffect(() => {
      fetch("http://localhost:3000/categories", {
         method: "GET",
         headers: {
            'Content-Type': 'aplication/json',
         },
      })
         .then((resp) => resp.json())
         .then((data) => {
            setCategories(data)  
          })
         .catch((err) => console.log(err))
   }, [])

   return (
      <form className='form'>
         <Input 
            type='text' 
            text='NOME DO PROJETO'
            name='name'
            placeholder='INSIRA O NOME DO PROJETO'
         /> 
         <Input
            type='number'
            text='ORÇAMENTO DO PROJETO'
            name='budget'
            placeholder='INSIRA O ORÇAMENTO TOTAL'
         />
         <Select name='category-id' text='SELECIONE A CATEGORIA' options={categories}/>
         <SubmitButton text={button_text}/>
      </form>
   )
}

export default ProjectForm