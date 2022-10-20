import {typeCatData} from "./JSON.js";

const companyInfoInputs = document.querySelectorAll(".required");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");
const passwordAlert = document.querySelector(".password-alert");
const date = document.querySelector(".signup");
const name = document.querySelector(".name");
const id = document.querySelector(".id");
const supplier = document.querySelector(".supp-cat");
const web = document.querySelector(".web");
const divCert = document.querySelector(".div-cert");
const otherDivGroup = document.querySelector(".other-div-group");
const otherDivCert= document.querySelector(".other-div-cert");
const address = document.querySelector(".address");
const addressTwo = document.querySelector(".address2");
const city = document.querySelector(".city");
const state = document.querySelector(".state");
const zip = document.querySelector(".zip");
const compAlert = document.querySelector(".comp-alert");
const firstName = document.querySelector(".first");
const lastName = document.querySelector(".last");
const contactEmail = document.querySelector(".contact-email");
const contactNumber = document.querySelector(".number");
const addContactBtn = document.querySelector(".add-contact");
const contactAlert = document.querySelector(".cont-alert");
const inputRows = document.querySelector(".input-rows");
const typeData = document.querySelector(".type-data");
const catData = document.querySelector(".cat-data");
const subAlert = document.querySelector(".sub-alert");
const table = document.querySelector(".contacts");
const form = document.querySelector("#loginForm");


/*=========== Password Match ==========*/

password2.addEventListener("blur", e => {

if (password.value !== password2.value) {

insertAlert(passwordAlert, "Passwords are not the same. Please try again");
}
else {
removeAlert(passwordAlert)
}
});

    

/*=========== Sign Up Date Format Change ==========*/
date.addEventListener("focus", e => {
e.currentTarget.type = "date";
});

date.addEventListener("blur", e => {
e.currentTarget.type = "text";
});

/*=========== Add new input field when Supplier Category = Other ==========*/
divCert.addEventListener("change", e => {
if (e.currentTarget.value === "Other") {
otherDivGroup.classList.remove("hidden");
} else {
    otherDivGroup.classList.add("hidden");
}
});
