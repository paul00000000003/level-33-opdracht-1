import React,{Component} from 'react'
import './list.css'

function ListItem(props) 
{   return ( <li className={props.className} 
                         onClick={(e)=>props.clickItem(props.item.id)}> 
                         {props.item.titel}

                {props.item.amount !== 1 ? <span>  Hoeveelheid : {props.item.amount}</span>:<span></span>}
             </li>) 
}

export default ListItem