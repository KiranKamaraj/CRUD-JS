$(document).ready(function(){
$('#update').click(function () {
	       $.ajax({
           url:'http://localhost:8080/updateapi',
       data: {
               username:$('#uname').val(),
               id:$('#id').val(),
               dob:$('#dob').val(),
               email:$('#email').val(),
               mobile:$('#mobno').val()
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
