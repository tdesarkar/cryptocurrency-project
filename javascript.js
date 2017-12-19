$(document).ready(function() {

	//alpha vantage https://www.alphavantage.co/documentation/
	var endpoint = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&outputsize=compact&symbol=BTC&market=USD&apikey=9AA4OWCBOEFDUNTK";

	$.ajax({
		url: endpoint,
	    method: 'GET',
	    success: function(data) {
	    	console.log(data);
	    },
	    error: function(err) {
	    	console.log(err);
	    }
	});

});