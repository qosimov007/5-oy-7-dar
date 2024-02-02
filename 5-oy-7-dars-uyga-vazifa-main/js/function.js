
function validatePassword() {
    var newPassword = document.getElementById('changePasswordForm').newPassword.value;
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    alert(newPassword); 
    if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
        return false;
    }
    if(!regularExpression.test(newPassword)) {
        alert("password should contain atleast one number and one special character");
        return false;
    }
};

function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

function shows() {
    var p = document.getElementById('repwd');
    p.setAttribute('type', 'text');
}

function hidden() {
    var p = document.getElementById('repwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eyee").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        shows();
    } else {
        pwShown = 0;
        hidden();
    }
}, false);

function usernameIsValid(username) {
    var validcharacters = '1234567890-_.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 0, l = username.length; i < l; ++i) {
        if (validcharacters.indexOf(username.substr(i, 1)) == -1) {
            return false;
        }
        return true;
    }
};

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validate(data) {
    if (!data.firstname.value) {
        alert("Ismingizni Kiritishingiz Shart!!!");
        data.firstname.focus();
        return false;
    }
    if (!data.firstname.value.strim().length < 3) {
        alert("Ismingizni kamida 3ta harfdan kop bolishi Shart!!!");
        data.firstname.focus();
        return false;
    }

    if (!data.lastname.value) {
        alert("Familyangizni Kiritishingiz Shart!!!");
        data.lastname.focus();
        return false;
    }
    if (!data.lastname.value.strim().length < 3) {
        alert("Familyangiz kamida 3ta harfdan kop bolishi Shart!!!");
        data.lastname.focus();
        return false;
    }

    if (!data.Username.value) {
        alert("Foydalauvchi Nomini Kiritishingiz Shart!!!");
        data.Username.focus();
        return false;
    }

    if (!usernameIsValid(data.Username.value)) {
        alert("Foydalauvchi Nomini To'g'ri Kiriting!!!");
        data.Username.focus();
        return false;
    }

    if (!data.email.value) {
        alert("Emailingizni Kiritishingiz Shart!!!");
        data.email.focus();
        return false;
    }

    if (!validateEmail(data.email.value)) {
        alert("Emailingizni To'g'ri Kiriting!!!");
        data.email.focus();
        return false;
    }

    if (!data.pwd.value) {
        alert("Parolni Kiritishingiz Shart!!!");
        data.password.focus();
        return false;
    }
    
    if (!data.pwd.value.length < 6) {
        alert("Parol uzumligi kamida 6tada iborat bolishi shart!!!");
        data.password.focus();
        return false;
    }

    if (!validatePassword(data.pwd.value)) {
        alert("Parolni To'g'ri kiritishingiz Shart!!!");
        data.password.focus();
        return false;
    }

    
    if (!data.repwd.value) {
        alert("Parolni Qayta Kiritishingiz Shart!!!");
        data.repassword.focus();
        return false;
    }

    if (!validatePassword(data.repwd.value)) {
        alert("Parolni Qaytadan to'g'ri kiritishingiz  Shart!!!");
        data.repassword.focus();
        return false;
    }

    if (!data.repwd.value != data.repwd.value) {
        alert("Parollar mos kelmadi!!!");
        data.repassword.focus();
        date.repwd.value = "";
        return false;
    }


    return true;
};

function getData(){
    let data = [];(localStorage.getItem)
    if (localStorage.getItem("users")) {
        data = JSON.parse(localStorage.getItem("users"))
    }

    return data;
}

export {validate , getData}
