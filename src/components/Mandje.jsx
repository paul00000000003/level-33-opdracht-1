import React,{Component} from 'react'
import './list.css'

function Mandje(props) 
{
    return (
            <li className={props.className}> {props.item.titel}
                   {props.item.amount !== 1 ? <span>  Hoeveelheid : {props.item.amount}</span>:<span></span>}
            </li>)
}

export default Mandje