import React from 'react'
import './user-contacts.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// eslint-disable-next-line
import arrowRightIcon, {ReactComponent as ArrowRightIcon} from '../static/icons/arrow-right.svg'


const links = [
    {
        title: "Имейл",
        type: "email"
    },
    {
        title: "Номер телефона",
        type: "phone"
    },
    {
        title: "Сайт",
        type: "site"
    }
]
export const UserContacts = () => (
	<Router>
        <dl className="user-contacts">
            <div className="user-contacts__item">
                <dt className="user-contacts__title">Имейл</dt>
                <dd className="user-contacts__value">
                    <a className="user-contacts__link" href="mailto:rrr@gmail.com">rrr@gmail.com</a>
                </dd>
                <ArrowRightIcon className="user-contacts__icon"/>
            </div>
            <div className="user-contacts__item">
                <dt className="user-contacts__title">Номер телефона</dt>
                <dd className="user-contacts__value">
                    <a className="user-contacts__link" href="tel:+37525252525">37525252525</a>
                </dd>
                <ArrowRightIcon className="user-contacts__icon"/>
            </div>
            <div className="user-contacts__item">
                <dt className="user-contacts__title">Сайт</dt>
                <dd className="user-contacts__value">
                    <a className="user-contacts__link" href="http://www.puppy.com">www.puppy.com</a>
                </dd>
                <ArrowRightIcon className="user-contacts__icon"/>
            </div>
        </dl>
	</Router>
)