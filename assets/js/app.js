$(document).ready(function() {

	//alpha vantage https://www.alphavantage.co/documentation/
	var endpoint = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&outputsize=compact&symbol=BTC&market=USD&apikey=9AA4OWCBOEFDUNTK";

	$.ajax({
		url: endpoint,
	    method: 'GET',
	    dataType: "Json",
	    success: function(data) {
	    	// console.log(data)
	    	var obj = data["Time Series (Digital Currency Daily)"]
	    	// console.log(data["Meta Data"]["Time Series (Digital Currency Daily)"]);
	    	var pricesesArr = [];
	    	for(var key in obj){
	    		// console.log(obj[key]["4a. close (USD)"])
	    		if (pricesesArr.length > 10) {
	    			break;
	    		}
	    		pricesesArr.unshift(obj[key]["4a. close (USD)"])
	    	}
	    	console.log(pricesesArr)
	    },
	    error: function(err) {
	    	console.log(err);
	    }
	});




var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


});