import React, { Component } from 'react';
import CommonContext from "./CommonContext"

class ContextProvider extends Component {
	state = {
		isNavOpen: false,
		setNavOpen: (state) => this.setState({
			isNavOpen: state
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