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

/*=================== Select/Show Types and Categories =====================*/

const data = JSON.parse(typeCatData);
const unique = [... new Map(data.map((d) => [d.type, d])).values()]; //unique array of types code that works for array of objects
let uniqueTypes = [];
unique.forEach(object => {
    uniqueTypes.push(object.type)
    });
    try {
        uniqueTypes.forEach(type => {
            let typeFilter = type.toLowerCase().replaceAll(' ', '-').replaceAll(',', '').replaceAll('&', 'and').replaceAll('/', '-');
       
            typeData.insertAdjacentHTML("beforeend", `
            <li class="typeLi"><label id="key" for="${typeFilter}">
            <input data-type="${typeFilter}" class="form-check-input type-check" id="${typeFilter}" name="type" value="${type}" type="checkbox" /> ${type}
            </label>
            <br /></li>
            `)
        });
    }
        catch {
            typeData.insertAdjacentHTML("beforeend", `
        <div class="alert alert-danger"><strong>Error:</strong> Data could not be retrieved. Please try again</div>
        `)
        }

        try {
        const checkboxes = document.querySelectorAll(".type-check");
        checkboxes.forEach(box => {
        box.addEventListener("change", e => {
       data.forEach(object => {
        let objectFilter = object.type.toLowerCase().replaceAll(' ', '-').replaceAll(',', '').replaceAll('&', 'and').replaceAll('/', '-');
        if (e.target.checked && objectFilter === e.target.dataset.type) {
            catData.insertAdjacentHTML("beforeend", `
            <li class="${e.target.dataset.type} catLi"><span><i alt="circle list icon" class="fa-regular fa-circle fa-2xs"></i></span> ${object.category}</li>
            `)
        }
       else if (!e.target.checked && objectFilter === e.target.dataset.type) {
            let lis = document.querySelectorAll(`.${e.target.dataset.type}`);
            lis.forEach(li => {
                let parent = li.parentNode;
                parent.removeChild(li)
            });
        }
       })
    });
    });
    }
    catch {
        catData.insertAdjacentHTML("beforeend", `
        <div class="alert alert-danger"><strong>Error:</strong> Data could not be retrieved. Please try again</div>
        `)
    }

 /*=================== Search Type =====================*/
    
    const typeSearchInput = document.querySelector(".type-search-input");
    const typesLi = document.getElementsByClassName("typeLi");

    typeSearchInput.addEventListener("keyup", (event) => {
        const { value } = event.target;
        const searchQuery = value.toLowerCase();

        for (const typeCheckbox of typesLi) {
            let type = typeCheckbox.textContent.toLowerCase();

            if (type.includes(searchQuery)) {
                typeCheckbox.classList.remove("hidden")
            }
            else {
                typeCheckbox.classList.add("hidden")
            };
            if (searchQuery === "" && !type.includes(searchQuery)) {
                typeCheckbox.classList.remove("hidden");    
            }
            }
        });


                     /*=================== Search Category =====================*/
            const catSearchInput = document.querySelector("#search-cat");
            const catsLi = document.getElementsByClassName("catLi");

            catSearchInput.addEventListener("keyup", (event) => {
                const { value } = event.target;
                const searchQuery = value.toLowerCase();
        
                for (const catCheckbox of catsLi) {
                    let category = catCheckbox.textContent.toLowerCase();
        
                    if (category.includes(searchQuery)) {
                        catCheckbox.classList.remove("hidden");
        
                    } else {
                        catCheckbox.classList.add("hidden");
                    }
                    if (searchQuery === "" && !category.includes(searchQuery)) {
                        catCheckbox.classList.remove("hidden");
                    }
                };
            })


const addCategoryBtn = document.querySelector(".add-cat");
    const subscribedList = document.querySelector(".sub-list");
    let array = [];

    addCategoryBtn.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll(".type-check");
        checkboxes.forEach(box => {

            if (box.checked && !array.includes(box.value)) {
                array.push(box.value)
               
                subscribedList.insertAdjacentHTML("beforeend", `
                <li class="${box.value} sub-del-btn">${box.value}<button id="deltbn" type="button" class="del-cat btn btn-danger btn-sm"><span><i alt="trash icon" class="fa-solid fa-trash"></i></span></button></li>
                `)
                removeAlert(subAlert);
            }
        });
    });

    document.getElementById('wrapper').addEventListener("click", event => deleteType(event)); 
    // This code wraps all the delete buttons inside the subscribe list  = allows deleteType function to be fast/no delay for each button click;   Wrapper id onto parent class;


