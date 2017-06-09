**redirect on change option with jquery** 

	

//Create the dropdown base

   $("<select/>").appendTo('form');

//Create the default option "Go"

	$("<option/>", {
		"selected": "selected",
		"value" : "", 
		"text" : "Go to..."
	}).appendTo("form select"); 

//Populate dropdown with menu items
	
	$("form a").each(function() {
		var el = $(this);
		$("<option />", {
			"value" : el.attr("href");
			"text"  : el.text()
		}).appendTo("form select");

	});

	$("form select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
	
   

