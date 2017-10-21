const defaultState = {
	text: ""
}

const textReducer = (state = defaultState, action) => {
	switch(action.type){
		case "CHANGE_TEXT":
			return {
				text: action.payload.text
			}
		default:
			return state
	}
	
}

export default textReducer