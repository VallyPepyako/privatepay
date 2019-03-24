import React from 'react'
import { NavLink } from "react-router-dom";
import './footer.scss';
// eslint-disable-next-line
import home, {ReactComponent as HomeIcon} from '../static/icons/home.svg'
// eslint-disable-next-line
import account, {ReactComponent as AccountIcon} from '../static/icons/account.svg'
// eslint-disable-next-line
import groups, {ReactComponent as GroupsIcon} from '../static/icons/account-multi.svg'

const pages = [
    { 
        link: "groups",
        icon: <GroupsIcon className="footer__nav-icon"/>
    },
    {
        link: "",
        icon: <HomeIcon className="footer__nav-icon"/>
    },
    { 
        link: "user",
        icon: <AccountIcon className="footer__nav-icon"/>
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <ul className="footer__nav-list">
                    {pages.map((page, key ) => <li key={key}  className="footer__nav-item">
                        <NavLink to={"/" + page.link} exact className="footer__nav-link" activeClassName="footer__nav-link--active" aria-label={page.link}>
                            {page.icon}
                        </NavLink>
                    </li>
                    )}
                </ul>
            </nav>
        </footer>
    )
}
export default Footer
