
let displayResponse = (responseText) => {
	let responseContainer = document.getElementById("email-response");
	if (responseContainer && !responseContainer.innerHTML && responseText) 
		responseContainer.innerHTML = responseText;
}

let formSubmit = (event) => {
	let email = document.getElementById("emailInput");
	if (email && email.value) {
		let request = new XMLHttpRequest();
		request.onreadystatechange = () => {
			if (request.readyState == XMLHttpRequest.DONE)
				displayResponse(request.responseText);
		}
		request.open("POST", "/submitEmail", true);
		request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		request.send(JSON.stringify({ email: email.value }));
	}
}

document.addEventListener("DOMContentLoaded", event => {
	// bind formSubmit 
	let emailForm = document.getElementById("emailForm");
	if (emailForm) 
		emailForm.addEventListener("submit", formSubmit);
});

