const defaultState = {
	counter: 0
}

export default function counterReducer (state=defaultState, action) {
	switch(action.type){
		case "INC_COUNTER_SUCCESS":
			return {
				counter: action.payload.counter
			}
		default:
			return state
	}
}