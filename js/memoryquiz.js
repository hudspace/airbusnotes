//Select the Limitations headline with id "takequiz" 

const takequiz = document.getElementById('takequiz');

//Assign a mouseover event to the Limitations headline that triggers a dialog box with link to the limitations quizk (the "OK" button)

takequiz.addEventListener('mouseover', () => {
	var x = confirm("Would you like to test your Memory Items and Limitations knowledge? Click 'OK' for yes, 'Cancel' for no.");
	if (x) {
		location.assign('memoryquiz.html');
	}
});







