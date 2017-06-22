

$(document).ready(function () { //begin ready

	//highlight the buttons when they're clicked and/or moused over
	$('button').click(function () {
		$('button').removeClass("selected");
		$(this).addClass("selected");

	


		//Variable holds url with JSON query string (derived from the Flickr API)
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; 
		
		//var planeType = $(this).text(); This doesn't do anything but I'm not deleting it yet
		
		//this stores the data to put in the Ajax request
		var flickrOptions = {
			tags: "A320", 
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
		$.getJSON(flickrAPI, flickrOptions, displayPhotos);

	});

	



}); //end ready