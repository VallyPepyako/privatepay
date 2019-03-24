import React from 'react'
import Avatar from './avatar';
import { Link } from "react-router-dom";
import { getClassName } from '../helpers';
import CommonContext from '../ContextProvider/CommonContext';
import './header.scss'
import './burger.css'

const HeaderContextWrapper = (props) => (
	<CommonContext.Consumer>
		{(context) => (
			<Header
				context={context}
				{...props} />

		)}
	</CommonContext.Consumer>
)
	const Header = ({modifiers, title, avatarUrl, userSettingButton, avatarUrl2x, context}) => {
		
	return (
		<header className={getClassName('header', modifiers)}>
		 	{userSettingButton && <Link to="/"> ред </Link>}
			{avatarUrl && <Avatar modifiers="small" avatarUrl={avatarUrl} avatarUrl2x={avatarUrl2x}/>}
			{!userSettingButton && <h1>{title}</h1>}
			
			<button onClick={() => context.state.setNavOpen(true)} class="hamburger" type="button">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
		</header>
	)
}
export default HeaderContextWrapper
