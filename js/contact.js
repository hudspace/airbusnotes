//Function repeated from memoryquiz.js to cause popup asking if user would like to submit comments when "AirbusNotes" link at bottom of page is moused over

const contactForm = document.getElementById('feedback');

contactForm.addEventListener('mouseover', () => {
	var y = confirm("Click Ok if you'd like to leave feedback!");

	if (y) {
		location.assign('contact.html');
	}

});
