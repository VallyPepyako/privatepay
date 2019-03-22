import React from 'react'
import './avatar.scss'
import { getClassName } from '../helpers';


export const Avatar = ({ modifiers, avatarUrl, avatarUrl2x }) => (
	<img
		className={getClassName('avatar', modifiers)}
        src={avatarUrl}
		srcSet={`${avatarUrl} , ${avatarUrl2x} 1.5x`}
	/>
)