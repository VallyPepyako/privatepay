import React, { PureComponent } from 'react'
import {UserContacts} from "../components/userContacts";

export default class User extends PureComponent {
	render() {
		return (
			<div>
				<UserContacts/>
			</div>
		)
	}
}
