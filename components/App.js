import React, { Component } from 'react'

import TextBox from './TextBox'

class App extends Component {
	render(){
		return (
			<div>
				<h1>Hello!</h1>	
				<TextBox text="hello!"/>
				<TextBox text="hello!"/>
			</div>
		)
	}
}

export default App;