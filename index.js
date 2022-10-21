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


/*=========== Functions ==========*/
function insertAlert(typeAlert, content) {
    typeAlert.classList.add("alert-danger");
    typeAlert.classList.remove("hidden");
    typeAlert.innerHTML = content;

}

function removeAlert(typeAlert) {
    typeAlert.classList.remove("alert-danger");
    typeAlert.classList.add("hidden");
    typeAlert.innerHTML = "";
}

function insertRow() {

    inputRows.insertAdjacentHTML("beforebegin", `
        <tr class="inputted-contacts">
    <td class="expand" contenteditable="false">${firstName.value}</td>
    <td class="expand" contenteditable="false">${lastName.value}</td>
    <td  class="expand"contenteditable="false">${contactEmail.value}</td>
    <td class="expand" contenteditable="false">${contactNumber.value}</td>
    <td class="hidden expand"><button type="button" 
    style="--bs-btn-padding-y: .05rem; --bs-btn-padding-x: .4rem;"
    class="save-cont btn btn-success btn-sm" onclick="saveRow(this)">
    <span><i alt="floppy disk icon" class="fa-solid fa-floppy-disk"></i></span> Save</button></td>
    <td class="expand"><button type="button" 
    style="--bs-btn-padding-y: .0rem; --bs-btn-padding-x: .4rem;"
    class="edit-cont btn btn-warning btn-sm" onclick="editRow(this)">
    <span><i alt="pencil icon" class="fa-solid fa-pencil"></i></span> Edit</button></td>
    <td class="expand"><button type="button" 
    style="--bs-btn-padding-y: .5rem; --bs-btn-padding-x: .8rem;"
    class="del-cont btn btn-danger btn-sm" onclick="deleteRow(this)"><span>
    <i alt="trash icon" class="fa-solid fa-trash fa-lg"></i></span></button>
    
    </td>
  </tr>
        `)
        }


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

/*=================== Add Row into contacts with edit, save, and delete buttons =====================*/

addContactBtn.addEventListener("click", () => {
    
    if (firstName.value === "" || lastName.value === "" || contactEmail.value === "" || contactNumber.value === "") {
        insertAlert(contactAlert, "Please fill all required fields to add a contact");
    }

    if (contactEmail.value !== "" && !contactEmail.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        insertAlert(contactAlert, "Please enter a valid email address");
    }

    if (firstName.value !== "" && lastName.value !== "" && contactEmail.value !== "" && contactNumber.value !== "" && contactEmail.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        removeAlert(contactAlert);

        insertRow();
        
        firstName.value = "";
        lastName.value = "";
        contactEmail.value = "";
        contactNumber.value = "";
    }
});

