import './styles.css'

function Input({type, text, name, placeholder, onChange, maxLength, min, max}){
   return (
      <div className='form-control'>
         <label htmlFor={name}>{text}:</label>
         <input 
            type={type} 
            name={name} 
            placeholder={placeholder}
            onChange={onChange}
            maxLength={maxLength}
            min={min}
            max={max}
         />
      </div>
   )
}

export default Input