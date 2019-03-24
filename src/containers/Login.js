import React, { PureComponent } from 'react'
import  Button from '../components/button';
import Input from "../components/input";
import './login.scss';
// eslint-disable-next-line
import logo, {ReactComponent as Logo} from '../static/liberty-logo.svg'

export default class Login extends PureComponent {

	render() {
		return (
			<section className="login">
				<form className="login__form">
					<Logo className="logo login__logo"/>
					<Input type="e-mail"
						   placeholder="e-mail"
						   modifiers="login login__input"
					/>
					<Input type="password"
						   placeholder="password"
						   modifiers="login login__input"
					/>
					<Button modifiers="login login__submit" onClick={this.props.login}>войти</Button>
				</form>
				<footer className="login__footer">
					<span>Нет аккаунта?&nbsp;</span>
					<Button modifiers="link color-white" onClick={this.props.showRegestraion}>Регистрация</Button>
				</footer>
			</section>
		)
	}
}
