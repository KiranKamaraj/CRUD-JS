$(document).ready(function() {  
$('#example').on("click",".rowedit",function () {
    	      	 var $row=$(this).closest("tr");
    	      	 var uid=$row.find('.id').text();
    	      	 var uname=$row.find('.username').text();
    	      	 var date=$row.find('.dob').text();
    	      	 var mail=$row.find('.email').text();
    	      	 var mobno=$row.find('.mobile').text();
    	      	 var values={
    	      			  "id" : uid,
    	      			  "username" : uname,
    	      			  "dob"  :  date,
    	      			  "email" :  mail,
    	      			  "mobile"  :  mobno
    	      	 }
    	      	sessionStorage.setItem("editsession", JSON.stringify(values));
    	       }); 
    	       var details=JSON.parse(sessionStorage.getItem("editsession"));
    	       $("#id").val(details.id);
    	       $("#uname").val(details.username);
    	       $("#dob").val(details.dob);
    	       $("#email").val(details.email);
    	       $("#mobno").val(details.mobile);
});