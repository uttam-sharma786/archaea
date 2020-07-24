function showTestRadioValue(testNum){
	if(document.getElementById(testNum).checked == true){
		var spanId = testNum.slice(0, -1);;
		document.getElementById(spanId+'Value').innerHTML = " ["+document.getElementById(testNum).value +"] ";
	}
	
	
}

function emptyTestRadioValue(num){
	for(var i=1;i<=num;i++){
		document.getElementById('test'+i+'Value').innerHTML = "";
	}
}


function empty_span(testCount){
	for(var i=1;i<=testCount;i++){
		document.getElementById('test'+i+'Value').innerHTML = "";
	}
}
