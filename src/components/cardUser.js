import React from 'react'
import './card-user.scss'
import Avatar from './avatar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getClassName } from '../helpers';
// eslint-disable-next-line
import infoIcon, {ReactComponent as InfoIcon} from '../static/icons/info.svg'


const CardUser = ({ modifiers, userName, userLink, avatarUrl, avatarUrl2x }) => (
	<Router>
	<article className={getClassName('card-user', modifiers)}>
		<Link to={userLink} className="card-user__link">
			<div className="card-user__avatar">
				<Avatar
					avatarUrl={avatarUrl}
					avatarUrl2x={avatarUrl2x}
					modifiers="small"
				/>
			</div>
			<h3 className="card-user__title">{userName}</h3>
			<InfoIcon className="card-user__icon"/>
		</Link>
	</article>
	</Router>
)
export default CardUser