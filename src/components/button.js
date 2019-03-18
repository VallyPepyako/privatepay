import React from 'react'
import './button.scss'
import { getClassName } from '../helpers';


export const Button = ({ title, modifiers }) => (
	<button className={getClassName('button', modifiers)}>{title}</button>
)