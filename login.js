//Step-1. add click enent handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //Step-2: get the email input data
    const emailValue = document.getElementById("email");
        const email = emailValue.value;

    //Step-3: get the password
    const getPassword = document.getElementById("password");
        const password = getPassword.value;
    
    // DANGER: Do notverify email password on the client side
    // Step-4: verify email and password
    if(email === 'arif@user.com' && password === 'jhinuk'){
        window.location.href = "bank.html";
    }else{
        alert("Username or password not match");
    }
});