import './styles.css'

function Select({text, name, options, onChange}){
   return (
      <div className='form-control'>
         <label htmlFor={name}>{text}:</label>
         <select name={name} id={name} onChange={onChange}>
            <option>SELECIONE UMA OPÇÃO</option>
            {options.map((option) => (
               <option key={option.nome}>{option.nome}</option>
            ))}
         </select>
      </div>
   )
}

export default Select