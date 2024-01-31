import './styles.css'
import Input from '../../Form/Input/Input.jsx'
import Select from '../../Form/Select/Select.jsx'
import SubmitButton  from '../../Form/SubmitButton/SubmitButton.jsx'

function ProjectForm({button_text}){
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
         <Select name='category-id' text='SELECIONE A CATEGORIA'/>
         <SubmitButton text={button_text}/>
      </form>
   )
}

export default ProjectForm