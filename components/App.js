import React, { Component } from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from '../reducers'

import TextBox from './TextBox'
import TextBoxContainer from '../containers/TextBoxContainer'

var store = createStore(reducers)

class App extends Component {
	render(){
		return (
			<Provider store={store}>
				<div>
					<h1>Hello!</h1>	
					<TextBoxContainer/>
					<TextBoxContainer/>
				</div>
			</Provider>
		)
	}
}

export default App;