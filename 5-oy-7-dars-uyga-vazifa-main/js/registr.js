import { validate , getData } from "./function.js";

const button = document.querySelector("#button");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const year = document.querySelector("#year");
const Username = document.querySelector("#Username");
const email = document.querySelector("#email");
const password = document.querySelector("#pwd");
const repassword = document.querySelector("#repwd");
const form = document.querySelector("#form");



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