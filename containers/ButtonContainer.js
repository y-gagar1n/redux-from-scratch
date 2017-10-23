import {connect} from 'react-redux'
import Button from '../components/Button'
import {incrementCounter} from '../actions'

const ButtonContainer = connect(
	state => {
		return {}
	},
	dispatch => {
		return {
			onButtonClicked: () => {
				dispatch(incrementCounter())
			}
		}
	}
)(Button)

export default ButtonContainer