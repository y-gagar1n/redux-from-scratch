class Api {
	static incrementCounter() {
		return fetch('http://localhost:3000/text')
			.then(response => {
				return response.text().then(function(text){
					return text
				});
			}).catch(error => {
				return error;
			})
	}
}

export default Api