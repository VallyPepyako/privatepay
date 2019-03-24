import React, { PureComponent } from 'react'
import { Button } from '../components/button';

export default class Login extends PureComponent {

	render() {
		return (
			<div>
				 <Button modifiers="login" onClick={this.props.login}>login</Button>
				 <Button modifiers="link" onClick={this.props.showRegestraion}>regestration</Button>
			</div>
		)
	}
}
