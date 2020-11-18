import React,{Component} from 'react'
import './list.css'

function Mandje(props) 
{
    return (
            <li className={props.item.className}> {props.item.titel}</li>)
}

export default Mandje