import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
export default function Menuitems(props) {
  return (
    <div className='menu-items d-flex model cursor'>
    <div className='menu-bar-item d-flex' title={props.title}>
    <p className='larg model '>{props.text}</p>
    <AiOutlineDown className='navbar-icons model'/>
      </div>  
    {props.dropdown}
    </div>
  )
}
