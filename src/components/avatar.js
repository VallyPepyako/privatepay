import React from 'react'
import './avatar.scss'
import { getClassName } from '../helpers';


const Avatar = ({ modifiers, avatarUrl, avatarUrl2x, userName }) => (
	<img
		className={getClassName('avatar', modifiers)}
        src={avatarUrl}
		alt="userName"
		srcSet={`${avatarUrl} , ${avatarUrl2x} 1.5x`}
	/>
)
export default Avatar