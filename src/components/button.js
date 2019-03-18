import React from 'react'
import './button.scss'
import { getClassName } from '../helpers';


export const Button = ({ title, modifiers, onClick }) => (
	<button className={getClassName('button', modifiers)} onClick={(e) => onClick(e)}>{title}</button>
)