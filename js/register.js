var firstname = document.querySelector("#firstname")
var lastname = document.querySelector("#lastname")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var registerBtn = document.querySelector("#submit-register")

registerBtn.addEventListener("click",function(){
    //e.preventDefault()
    if (firstname.value==="" || lastname.value==="" || email.value===""|| password.value===""){
        alert("please fill data")
    }else{
        localStorage.setItem("firstname",firstname.value)
        localStorage.setItem("lastname",lastname.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)

        setTimeout (()=>{
            window.location="login.html"
        } , 1000)
    }
})