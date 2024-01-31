import './styles.css'

function Select({text, name, options, handleOnChange, value}){
   return (
      <div className='form-control'>
         <label htmlFor={name}>{text}:</label>
         <select name={name} id={name} >
            <option>SELECIONE UMA OPÇÃO</option>
         </select>
      </div>
   )
}

export default Select