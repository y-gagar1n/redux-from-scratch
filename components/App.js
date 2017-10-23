import React, { Component } from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'

import ButtonContainer from '../containers/ButtonContainer'
import TextBoxContainer from '../containers/TextBoxContainer'
import CounterContainer from '../containers/CounterContainer'

var store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
	render(){
		return (
			<Provider store={store}>
				<div>
					<h1>Hello!</h1>	
					<TextBoxContainer/>
					<TextBoxContainer/>
					<ButtonContainer />
					<CounterContainer />
				</div>
			</Provider>
		)
	}
}

export default App;