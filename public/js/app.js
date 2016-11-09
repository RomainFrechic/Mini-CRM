(function(){
	"use strict";
	var app = {

		serverUrl: "http://localhost:2000",

		init:function(){
			this.getMarkdown();
		},
		
    //Requête pour Recuperer le ficier crm.json
    getMarkdown:function(response){
    	var data = $.ajax({
    		url : 'crm.json',
    		method : 'GET',
    	}).done(function(response){
    		var customers =response.customers;
    		for (var i=0; i<customers.length; i++){
    			$("#form").append("<tr id="+i+"></tr>");
    			for(var parcourListes in customers[i]){
    				$("#"+i).append("<td>"+customers[i][parcourListes]+"</td>");

    			}
    			console.log(i);
    		}
    	});
    },


};

$(document).ready(function(){
	app.init();
});
})();