import React, { Component } from 'react'

class TextBox extends Component {
	render() {
		return (
			<input type="text" value={this.props.text} onChange={this.props.textChanged} />
		)
	}
}

export default TextBox;