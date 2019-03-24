import React, { Component } from 'react';
import CommonContext from "./CommonContext"

class ContextProvider extends Component {
	state = {
		activePageTitle: "Главная",
		setActivePageTitle: (page) => this.setState({
			activePageTitle: page
		}),
	}
	render() { 
		return ( 
			<CommonContext.Provider value={{
				state: this.state
			}}> 
				{this.props.children}
			</CommonContext.Provider>
		)
	}
}
 
export default ContextProvider;