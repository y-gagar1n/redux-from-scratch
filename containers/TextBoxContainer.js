import {connect} from 'react-redux'
import TextBox from '../components/TextBox'

import {changeText} from '../actions'

const mapStateToProps = (state, props) => {
	return {
		text: state.textReducer.text
	};
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		textChanged: (event) => {
			dispatch(changeText(event.target.value))
		}
	}	
}

const TextBoxContainer = connect(mapStateToProps, mapDispatchToProps) (TextBox)

export default TextBoxContainer