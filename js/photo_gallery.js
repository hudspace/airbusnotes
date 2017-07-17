$(document).ready(function () { //begin ready
  
	$('.photo-button').click(function(event) {
		
		var id = $(this).prop('id');

		$('button').removeClass("selected");
		$(this).addClass("selected");

		getPhotos(id);
	});


	function getPhotos(id) {
		//Variable holds url with JSON query string (derived from the Flickr API)
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; 
		
		
		//this stores the data to put in the Ajax request
		var flickerProps = {
			tags: "Airbus " + id, 
			format: "json"
		};


		//This is the callback function which uses the data to build up the html displaying the pics
		function displayPhotos(data) {
			var photoHTML = '<ul id="photos">';
			$.each(data.items, function (i, photo) {
				photoHTML += '<li class="grid-25">';
				photoHTML += '<a href="' + photo.link + '" class="image">';
				photoHTML += '<img src="' + photo.media.m + '"</a></li>';
			});
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
		}

		//This is the AJAX send request
		$.getJSON(flickrAPI, flickerProps, displayPhotos);		
	}




}); //end ready