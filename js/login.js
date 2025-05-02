// localStorage.setItem("first car","BMW")   بيخزنها 
// console.log(localStorage.getItem("first car"))   بيجيبها 
// localStorage.removeItem("first car")   بيشيلها
// localStorage.clear()     بيفضي ال لوكال ستوريدج كلها


var email = document.querySelector("#email")
var password = document.querySelector("#password")
var loginBTN = document.querySelector("#submit-login")

var getEmail = localStorage.getItem("email")
var getPassword = localStorage.getItem("password")

loginBTN.addEventListener("click", function(){
    if(email.value==="" || password.value===""){
         alert("please fill data")
    }else{
        if(getEmail && getEmail.trim()===email.value.trim() && getPassword && getPassword.trim()===password.value.trim()){
           setTimeout(()=> {
            window.location= "main.html"
           }, 1500)
        }else{
            alert("sorry the email or the password is wrong")
        }
    }
})