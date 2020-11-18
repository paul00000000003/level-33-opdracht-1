import React from 'react'

function InputField(props) 
{
        return (
             <div>
                 <input id="nieuwItem" type="text" name="nieuwItem" placeholder="Voeg item toe"/> 
                 <button onClick={props.voegItemToe}>Klik om item toe te voegen</button>
             </div>
        )
}

export default InputField











export default InputField 