import '../AuthPage/Inputbox.css';
function Inputbox({type, placeholder, value, onChange ,name ,onFocus, onBlur}) {
    return(
        <>
       <div className="inputbox-contain">
         <input type={type} 
         className='input-auth' 
         placeholder={placeholder} 
         value={value} 
         onChange={onChange} 
         name={name}
         onFocus={onFocus}
         onBlur={onBlur} required />

       
       </div>
        </>
    )
}
export default Inputbox;