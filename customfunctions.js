﻿const endPoint = 'http://localhost';

function httpRequest(url, callback) {
		var xhr = new XMLHttpRequest();

		// The last parameter must be set to true to make an asynchronous request
		xhr.open('GET', url, true);
		
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.setRequestHeader('Accept', 'application/json');

		xhr.onload = function() {
			if (xhr.status >= 200 && xhr.status < 300) {
				callback(xhr.status);
			} else {
				callback(xhr.status);
			}
		};
		xhr.send();
}

function NAME(company_number) {
	// waits 1 second before returning the result
	
	return new OfficeExtension.Promise(function(resolve) {
		httpRequest('http://localhost/company-name/' + company_number, function(response){
			resolve(response);
		});
	});
}

function REGADDRESS(company_number) {
	return new OfficeExtension.Promise(function(resolve) {
		httpRequest(endPoint + '/company-name/' + company_number, function(response){
			resolve(response);
		});
	});
}

function LIQUIDATED(company_number) {
	return new OfficeExtension.Promise(function(resolve) {
		httpRequest(endPoint + '/company-name/' + company_number, function(response){
			resolve(response);
		});
	});
}

function SICCODES(company_number) {
	return new OfficeExtension.Promise(function(resolve) {
		httpRequest(endPoint + '/company-name/' + company_number, function(response){
			resolve(response);
		});
	});
}

function ACCOUNTINGDATE(company_number) {
	return new OfficeExtension.Promise(function(resolve) {
		httpRequest(endPoint + '/company-name/' + company_number, function(response){
			resolve(response);
		});
	});
}

function OVERDUESTATUS(company_number) {
	return new OfficeExtension.Promise(function(resolve) {
		httpRequest(endPoint + '/company-name/' + company_number, function(response){
			resolve(response);
		});
	});
}

function LASTMEMBERSLIST(company_number) {
	return new OfficeExtension.Promise(function(resolve) {
		httpRequest(endPoint + '/company-name/' + company_number, function(response){
			resolve(response);
		});
	});
}

// The following function is an example of an asynchronous function:
function ADD42ASYNC(num1, num2) {
	// waits 1 second before returning the result
	return new OfficeExtension.Promise(function(resolve) {
		setTimeout(function() {
			resolve(num1 + num2 + 42);
		}, 1000);
	});
}

// The following function is an example that returns a boolean value:
function ISPRIME(num) {
	if(num <= 1 || !Number.isInteger(num)) return false; // validates input
	// checks natural numbers below the square root (not optimal)
	for(var factor = Math.floor(Math.sqrt(num)); factor > 1; factor--){
    		if(num % factor == 0) return false;
  	}
  	return true;
}

// The following function is an example that's computation-intensive for high inputs:
function NTHPRIME(n){
  	var primeCount = 0;
  	for(var num = 2; primeCount < n; num++){
    		if(ISPRIME(num)) primeCount++;
  	}
  	return num - 1;  
}

// The following function is an example that returns a string:
function GETDAY() {
	var d = new Date();
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return days[d.getDay()];
}

// The following function is an example that streams values:
function INCREMENTVALUE(increment, caller){    
	var result = 0;
	var myInterval = setInterval(function(){
		result += increment;
		caller.setResult(result);
	}, 1000);
	caller.onCanceled = function(){
		clearInterval(myInterval);
	}
}

// The following function is an example that uses a range of cells:
function SECONDHIGHEST(range){
	var highest = range[0][0], secondHighest = range[0][0];
	for(var i = 0; i < range.length;i++){
		for(var j = 0; j < range[i].length;j++){
			if(range[i][j] >= highest){
				secondHighest = highest;
				highest = range[i][j];
			}
			else if(range[i][j] >= secondHighest){
				secondHighest = range[i][j];
			}
		}
	}
	return secondHighest;
}

