//console.log("running");

function test(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");
    /* I created three different Regex variables for each of the input fields to account for the fact 
    that certain special characters will be okay in certain fields. E.g '.' and '@' in the email field*/
    var nameRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var emailRegex = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
    var subjectMessageRegex = /[#$%^&*()_+\-=\[\]{};':"\\|<>\/]+/;
    var text;
    
    if (((name.length < 10) || (name.length >50)) || (nameRegex.test(name))){
       text = "Name is not valid";
       error.innerText = text;
       return false;       
   }
   //Email needs to include @ to be valid
   if(((email.length < 10) || (email.length > 30)) || (emailRegex.test(email)) || (email.includes("@") === false)) {
       text = "Invalid email";
       error.innerText = text;
       return false;
   }

   if(((subject.length < 10) || (subject.length > 30)) || (subjectMessageRegex.test(subject))) {
       text = "Invalid subject";
       error.innerText = text;
       return false;
   }

   if(((message.length < 10) || (message.length > 150)) || (subjectMessageRegex.test(message))) {
       text = "Invalid message";
       error.inner = text;
       return false;
   }
   return true;

}