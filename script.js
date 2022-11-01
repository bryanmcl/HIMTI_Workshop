function validationForm(){
var email = document.getElementById("email-box").value;
var res = true;

if (email.length == 0) {
    alert("Please fill the email!");
    return res = false;
} 

if(res == true){
  alert("Your Email Have been Submited, Thanks");
  return res = true;
}
}
