
const forms = document.getElementById("forms")
var a1=document.getElementById("email");
var a2=document.getElementById("password");


function one(){
  a1.style.backgroundImage="none";
}
function two(){
  a2.style.backgroundImage="none";
}
forms.addEventListener("submit", (e) =>{

 e.preventDefault();
  
  var a = document.getElementById("email").value;
var b = document.getElementById("password").value;
console.log(a);
console.log(b);
  if(a==""){
    alert("Please enter your email");
  }
  else if(b==""){
    alert("Please enter your password");
  }
   else if(b.length<5){
     alert("Password must be at least 5 characters");
   }
   else{
     alert("You are successfully logged in");
    }
    
});
