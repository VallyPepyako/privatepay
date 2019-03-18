import React, { PureComponent } from 'react'
import { Button } from '../components/button';

export default class Login extends PureComponent {
	constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
	handleClick() {
		console.log("ololo")
		// this.props.login
	}
	render() {
		return (
			<div>
				 <Button title="login" modifiers={["login"]} onClick={this.props.login}/>
			</div>
		)
	}
}
