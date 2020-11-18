import React from 'react'
import './list.css'

function InputField(props) 
{
        return (
             <div>
                 <input id="nieuwItem" type="text" name="nieuwItem" placeholder="Voeg item toe"/> 
                 <button id="toevoegKnop" onClick={props.voegItemToe}>Klik om item toe te voegen</button>
             </div>
        )
}

export default InputField








