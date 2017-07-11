


$(document).ready(function () { //begin ready

	/*~~~~~~ FUNCTION RUN IF FIRST BUTTON ('A320') IS CLICKED ~~~~~~*/

	//highlight the buttons when they're clicked and/or moused over
	$('#A320').click(function () {

		$('button').removeClass("selected");
		$(this).addClass("selected");


		//Variable holds url with JSON query string (derived from the Flickr API)
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; 
		
		//var planeType = $(this).text(); This doesn't do anything but I'm not deleting it yet
		
		//this stores the data to put in the Ajax request
		var flickr320 = {
			tags: "Airbus A320", 
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
		$.getJSON(flickrAPI, flickr320, displayPhotos);

	});

	
/* ~~~~~~~ SAME FUNCTION RUN IF THE SECOND BUTTON ('A321') IS CLICKED ~~~~~~*/

		//highlight the buttons when they're clicked and/or moused over
	$('#A321').click(function () {
		$('button').removeClass("selected");
		$(this).addClass("selected");




		//Variable holds url with JSON query string (derived from the Flickr API)
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; 
		
		//var planeType = $(this).text(); This doesn't do anything but I'm not deleting it yet
		
		//this stores the data to put in the Ajax request
		var flickr321 = {
			tags: "Airbus A321", 
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
		$.getJSON(flickrAPI, flickr321, displayPhotos);

	});

	/* ~~~~~~~ SAME FUNCTION RUN IF THE THIRD BUTTON ('A330') IS CLICKED ~~~~~~*/

		//highlight the buttons when they're clicked and/or moused over
	$('#A330').click(function () {
		$('button').removeClass("selected");
		$(this).addClass("selected");




		//Variable holds url with JSON query string (derived from the Flickr API)
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; 
		
		//var planeType = $(this).text(); This doesn't do anything but I'm not deleting it yet
		
		//this stores the data to put in the Ajax request
		var flickr330 = {
			tags: "Airbus A330", 
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
		$.getJSON(flickrAPI, flickr330, displayPhotos);

	});

	/* ~~~~~~~ SAME FUNCTION RUN IF THE FOURTH BUTTON ('A380') IS CLICKED ~~~~~~*/

		//highlight the buttons when they're clicked and/or moused over
	$('#A380').click(function () {
		$('button').removeClass("selected");
		$(this).addClass("selected");




		//Variable holds url with JSON query string (derived from the Flickr API)
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; 
		
		//var planeType = $(this).text(); This doesn't do anything but I'm not deleting it yet
		
		//this stores the data to put in the Ajax request
		var flickr380 = {
			tags: "Airbus A380", 
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
		$.getJSON(flickrAPI, flickr380, displayPhotos);

	});




}); //end ready