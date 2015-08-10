$(function() {
  // Handler for .ready() called.

//height for scrollify  
  $('section').css('height', $(window).height());

//scrolify colors
	$.scrollify({
		section : "section",
	});

	//graph javascript
	var pieData = [
		{
			value: 80,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label: "Mobile"
		},
		{
			value: 15,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "Desktop"
		},
		{
			value: 5,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "Tablet"
		}

	];

	//window.onload = function(){
	//	var ctx = document.getElementById("chart-area").getContext("2d");
	//	window.myPie = new Chart(ctx).Pie(pieData);
	//};

});


//Advertising Calculations 
//$Function
function formatCurrency(total) {
    var neg = false;
    if(total < 0) {
        neg = true;
        total = Math.abs(total);
    }
    return (neg ? "-$" : '$') + parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}
//% Function


//cpm 
function calculateRate() {

	//on click, get user input
	var cpm = $('.cpm').val();
	var impression = $('.impression').val();
	console.log(cpm);
	console.log(impression);
	
	cpm = parseInt(cpm);
	impression = parseInt(impression);

	var result = impression * cpm / 1000 ;

	//display results
	console.log(result);
	$('.cost').val(formatCurrency(result));

}

$ (function() {

	$('.totalSubmit').click(calculateRate);

});

//cpm 
function findCPM() {

	//on click, get user input
	var findCost = $('.findCost').val();
	var findImpression = $('.findImpression').val();
	console.log(findCost);
	console.log(findImpression);
	
	findCost = parseInt(findCost);
	findImpression = parseInt(findImpression);

	var result = findCost * findImpression / 1000 ;

	//display results
	console.log(result);
	$('.findCPM').val(formatCurrency(result));

}

$ (function() {

	$('.findSubmit').click(findCPM);

});

// eCPM Calculator
function cpmCalc() {

	var revenue = $('.revenue').val();
	var ecpmImpression = $('.ecpmImpression').val();
	console.log(revenue);
	console.log(ecpmImpression);
	
	revenue = parseInt(revenue);
	ecpmImpression = parseInt(ecpmImpression);

	var result = revenue / ecpmImpression * 1000 ;

	//display results
	console.log(result);
	$('.ecpm').val(formatCurrency(result));

}

$ (function() {

	$('.ecpmSubmit').click(cpmCalc);

});

// CTR Calculator
function ctrCalc() {

	var clicks = $('.clicks').val();
	var ctrImpression = $('.ctrImpression').val();
	console.log(clicks);
	console.log(ctrImpression);
	
	clicks = parseInt(clicks);
	ctrImpression = parseInt(ctrImpression);

	var result = (clicks / ctrImpression * 100).toFixed(4) + "%" ;

	//display results
	console.log(result);
	$('.ctr').val(result);

}

$ (function() {

	$('.ctrSubmit').click(ctrCalc);

});

// Required Impressions
function reqImpressions() {

	var reqClicks = $('.reqClicks').val();
	var reqCtr = $('.reqCtr').val();
	console.log(reqClicks);
	console.log(reqCtr);
	
	reqClicks = parseInt(reqClicks);
	reqCtr = parseFloat(reqCtr);

	var result = parseInt(reqClicks / reqCtr) ;

	//display results
	console.log(result);
	$('.reqImpressions').val(result);

}

$ (function() {

	$('.reqctrSubmit').click(reqImpressions);

});

//Discrepancy formula
function discrepancyCalc() {

	var firstImpressions = $('.firstImpressions').val();
	var thirdImpressions = $('.thirdImpressions').val();
	console.log(firstImpressions);
	console.log(thirdImpressions);
	
	firstImpressions = parseInt(firstImpressions);
	thirdImpressions = parseInt(thirdImpressions);

	var difference = parseInt(firstImpressions - thirdImpressions) ;
	var percentage = ((difference / thirdImpressions) * 100 ).toFixed(2) + "%" ; 
	//difference results - use class area
	console.log(difference);
	$('.impressionDifference').val(difference);
	console.log(percentage);
	$('.discrepancy').val(percentage);

}

$ (function() {

	$('.discrepancySubmit').click(discrepancyCalc);
});

//UTM Generator
function utmGenerator() {

	var campaignURL = $('.campaignURL').val();
	var campaignSource = $('.campaignSource').val();
	var campaignName = $('.campaignName').val();
	var campaignMedium = $('.campaignMedium').val();

	var result = campaignURL + "?utm_source=" + campaignSource + "&utm_campaign=" + campaignName + "&utm_medium=" + campaignMedium ;

	console.log(result);
	$('.utmCode').val(result);
}

$ (function() {

	$('.generateUTM').click(utmGenerator);
});



