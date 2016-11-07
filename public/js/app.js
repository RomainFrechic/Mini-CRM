(function(){
	"use strict";
	var app = {

		serverUrl: "http://localhost:2000",

		init:function(){
			this.getMarkdown();
			
		},
		
    //Recuperer le ficier crm.json
    getMarkdown:function(response){
    	var data = $.ajax({
		url : 'crm.json',
		method : 'GET',
        }).done(function(response){
	    var customers =response.customers;
	    for (var i=0; i<customers.length; i++){
        $("#form").append("<li>"+customers[i].first_name+""+customers[i].last_name+""+customers[i].company+""+customers[i].role+""+customers[i].phone+""+customers[i].email+""+customers[i].description+""+"</li>");
			console.log(i);
	    }
		});
     },
	

};

$(document).ready(function(){
	app.init();
});
})();