import React,{Component} from 'react'
import './list.css'

function ListItem(props) 
{   return (
            <li className={props.item.className} onClick={(e)=>props.clickItem(props.item.id)}> {props.item.titel}</li>)
}

export default ListItem