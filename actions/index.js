import Api from '../api'

export const changeText = (text) => {
	return {
		type: "CHANGE_TEXT",
		payload: {
			text: text
		}
	}
}

export function incrementCounter() {
	return (dispatch) => {
		Api.incrementCounter().then(counter => {
			dispatch(incrementCounterSuccess(counter))
		})
	}
}

function incrementCounterSuccess(counter) {
	return {
		type: "INC_COUNTER_SUCCESS",
		payload:{
			counter:counter
		}
	}
}