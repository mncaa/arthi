function nfun() {
	var cname=document.forms["form2"]["cname"].value;
	var issuer=document.forms["form2"]["issuer"].value;

	if (cname==null || cname=="") {
		document.getElementById("errorbox").innerHTML="please enter certfication name";
		return false;
	}
 
 if(issuer==null || issuer==""){

 	document.getElementById("errorbox2").innerHTML="please enter issuer name";
 	return false;
 }     
 if (cname!='' && issuer!='') {
 	
alert("File Upload Success");

 	 }
}