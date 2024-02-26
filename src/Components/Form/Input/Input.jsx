import './styles.css'

function Input({type, text, name, placeholder, onChange}){
   return (
      <div className='form-control'>
         <label htmlFor={name}>{text}:</label>
         <input 
            type={type} 
            name={name} 
            placeholder={placeholder}
            onChange={onChange}
         />
      </div>
   )
}

export default Input