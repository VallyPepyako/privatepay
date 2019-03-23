import React, { PureComponent } from 'react'
import { Button } from '../components/button';
import { Input } from "../components/input";

export default class Login extends PureComponent {

	render() {
		return (
			<div className="login-block">
				<form className="form-login">
					<div className="form-login__input">
						<Input type="e-mail"
							   placeholder="e-mail"
							   modifiers="login"
						/>
					</div>
                    <div className="form-login__input">
						<Input type="password"
							   placeholder="password"
							   modifiers="login"
						/>
					</div>
					<div className="form-login__submit">
						<Button modifiers="login" onClick={this.props.login}>login</Button>
					</div>
				</form>

				<Button modifiers="link" onClick={this.props.showRegestraion}>Registration</Button>
			</div>
		)
	}
}
