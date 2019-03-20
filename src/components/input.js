import React from 'react'
import './input.scss'
import { getClassName } from '../helpers';


export const Input = ({ modifiers, type, placeholder, onClick }) => (
	<input type={type}
		   className={getClassName('input', modifiers)}
           placeholder={placeholder}
		   onClick={(e) => onClick(e)}
	/>
)