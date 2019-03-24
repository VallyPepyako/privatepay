import React, { PureComponent } from 'react'
import Header from '../components/header';

export default class User extends PureComponent {
	render() {
		return (
			<div>
			<Header title="Юзер" userSettingButton={true}/>
				Страница юзера
			</div>
		)
	}
}
