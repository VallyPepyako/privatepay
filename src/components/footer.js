import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import footer from './footer.scss';
import { Main } from '../pages/main';
import { Groups } from '../pages/Groups'
import { User } from '../pages/User'
import home, {ReactComponent as HomeIcon} from '../static/icons/home.svg'
import account, {ReactComponent as AccountIcon} from '../static/icons/account.svg'
import groups, {ReactComponent as GroupsIcon} from '../static/icons/account-multi.svg'



export const Footer = () => (
    <Router>
	<footer className="footer">
		<nav className="footer__nav">
			<ul className="footer__nav-list">
				<li className="footer__nav-item">
					<Link to="/Groups" aria-label="Groups">
						<GroupsIcon className="footer__nav-icon"/>
					</Link>
				</li>
				<li className="footer__nav-item">
                    <Link to="/" aria-label="Home">
                        <HomeIcon className="footer__nav-icon"/>
					</Link>
				</li>
				<li className="footer__nav-item">
                    <Link to="/User" aria-label="User">
                        <AccountIcon className="footer__nav-icon"/>
					</Link>
				</li>
			</ul>
		</nav>
	</footer>
	<Route exact path="/" component={ Main } />
	<Route path="/Groups" component={ Groups } />
	<Route path="/User" component={ User } />
</Router>

)