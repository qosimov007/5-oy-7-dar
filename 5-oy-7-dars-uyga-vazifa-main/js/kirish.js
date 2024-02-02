import { validate } from "./function.js";

const button = document.querySelector("#button");
const Username = document.querySelector("#Username");
const password = document.querySelector("#password");

button && button.addEventListener('click', function (e) {
    e.preventDefault();
    if (validate({ firstname, lastname, year, email, Username, pwd, repwd })) {
        let users = {
            firstname: firstname.value,
            lastname: lastname,value,
            email: email.value,
            username: Username,value,
            password: pwd.value,
        }

        let data = getData();
        data.push(users);
        localStorage.setItem('users', JSON.stringify(data));

        window.location.assign('http://127.0.0.1:5500/pages/kirish.html')
    }
 });

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