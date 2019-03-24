import React from 'react'
import Avatar from './avatar';
import { Link } from "react-router-dom";

export default function Header({ title, avatarUrl, userSettingButton, avatarUrl2x}) {
	return (
		<header>
			<Link></Link>
		 	{userSettingButton && <Link to="/"> ред </Link>}
			{avatarUrl && <Avatar modifiers="small" avatarUrl={avatarUrl} avatarUrl2x={avatarUrl2x}/>}
			<h1>{title}</h1>
			<button onClick={() => this.onSetSidebarOpen(true)}>
        Open sidebar
      </button>
		</header>
	)
}
