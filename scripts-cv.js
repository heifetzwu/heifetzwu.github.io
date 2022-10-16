
var API_ENDPOINT = "https://2yyqcglno6.execute-api.ap-southeast-1.amazonaws.com/Stage/"    // postReader1
 
document.getElementById("sayButton").onclick = function(){

	
	
	document.getElementById("tel").textContent="000000000";

	$.ajax({
          
	      url: API_ENDPOINT + '?id=0',
	      type: 'GET',
	    //   data:  JSON.stringify(inputData),
	      //dataType: 'json',
	    //   contentType: 'application/json; charset=utf-8',
		  contentType: 'application/x-www-form-urlencoded',
		//   contentType: 'application/json',
	      success: function (response) {
					console.log('response='+ response[0]);
					console.log('tel=' + response[0].tel);
					let tel = response[0].tel
	                // let data = JSON.parse(response);
					// console.log('data=' + data);
					document.getElementById("tel").textContent="" + tel;
					
	      },
	      error: function () {
	      	  
	          alert("ajax err=");
	      }
	  });
}

