const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailIn = form.elements.email.value.trim();
    const passIn = form.elements.password.value.trim();
    // console.log(emailIn, passIn);
    

    if (emailIn === "" || passIn === "") {
        alert("All form fields must be filled in");
        return;
    };
    
    const formOut = {
        email: emailIn,
        password: passIn,
    };
    console.log(formOut);
    form.reset();
});