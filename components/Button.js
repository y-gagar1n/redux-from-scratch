import React, {Component} from 'react'

class Button extends Component{
	render() {
		return (
			<input type="button" value="Increment" onClick={this.props.onButtonClicked} />
		)
	}
}

export default Button