import {connect} from 'react-redux'
import Counter from '../components/Counter'

const CounterContainer = connect(
	state => {
		return {
			counter: state.counterReducer.counter
		}
	}
	) (Counter)

export default CounterContainer