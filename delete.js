$(document).ready(function(){
$('#delete').click(function () {
	       $.ajax({
           url:'http://localhost:8080/deleteapi',
       data: {        
               id:$('#id').val()
             },
           type:"POST",
           success:function (data) {    
              window.location.replace("http://localhost:8080/index");  
           },
           error:function (data){
        	   alert("Error!..");
        	 /*  window.location.replace("index"); */
           }
       });
 });
});
