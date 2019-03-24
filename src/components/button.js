import React from 'react'
import './button.scss'
import { getClassName } from '../helpers';


const Button = ({ children, modifiers, onClick }) => (
	<button className={getClassName('button', modifiers)} onClick={(e) => onClick(e)}>{children}</button>
)
export default Button