$(document).ready(function() {
    $('#example').DataTable( {
    	"ajax" : {
    	       "url" : 'http://localhost:8080/indexapi',
    	       "type" : "GET",
    	       "datatype" : "json"
    	       },
        "columns": [
        	 {   "data": "id" ,
             	className: "id"	},
            {    "data": "username" ,
            	className: "username"	},
            { "data": "dob",
           	  className: "dob" },
            { "data": "email",
           	  className: "email" },
            { "data": "mobile",
            	className: "mobile"  },
            {
                 className: "center",
                 defaultContent: '<a href="/edit" class="rowedit"><input type="button" value="Edit"></a>' 
            }, {
                className: "center",
                defaultContent: ' <a href="/delete" class="rowedit"><input type="button" value="Delete"></a>' 
        }
        ]
    	     
    });
});