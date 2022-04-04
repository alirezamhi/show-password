const eyes = document.querySelector(".eyes");
const password = document.querySelector(".password-input");

eyes.addEventListener('click' , () => {
    if(password.type === "password" ){
        password.setAttribute("type" , "text")
        eyes.classList.add("show")
    }else{
        password.setAttribute("type" , "password")
        eyes.classList.remove("show")
    }
});
