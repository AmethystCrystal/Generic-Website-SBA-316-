const p = document.createElement("p");
p.textContent = "Nullam faucibus lectus a lectus posuere, vitae mollis lorem fringilla. Phasellus ultricies ut nulla vitae mattis. Nulla finibus eleifend euismod. Cras pellentesque ex a rhoncus suscipit. Nulla accumsan sem fringilla augue consequat, id pulvinar sapien eleifend. Nulla augue libero, luctus sit amet nibh nec, faucibus tincidunt diam. Suspendisse id euismod libero. Sed semper auctor dolor eu gravida. Praesent euismod magna tempus mauris gravida dictum. Vestibulum vehicula aliquet nisl, quis viverra odio fermentum vel. Integer vulputate libero ut purus iaculis finibus. Cras rhoncus erat ut ipsum hendrerit tempor. Aenean finibus euismod eros sed cursus. Ut vulputate leo id maximus consequat. Duis ac posuere neque, eu ultrices quam.";
p.style.textAlign = "center"

const flexContainer = document.getElementById("flex")
flexContainer.appendChild(p);

const flexItems = document.querySelectorAll(".container .flex-item");

flexItems.forEach(function (item) {
    item.textContent = "Nullam faucibus lectus a lectus posuere, vitae mollis lorem fringilla. Phasellus ultricies ut nulla vitae mattis. Nulla finibus eleifend euismod. Cras pellentesque ex a rhoncus suscipit. Nulla accumsan sem fringilla augue consequat, id pulvinar sapien eleifend. Nulla augue libero, luctus sit amet nibh nec, faucibus tincidunt diam. Suspendisse id euismod libero. Sed semper auctor dolor eu gravida. Praesent euismod magna tempus mauris gravida dictum. Vestibulum vehicula aliquet nisl, quis viverra odio fermentum vel. Integer vulputate libero ut purus iaculis finibus. Cras rhoncus erat ut ipsum hendrerit tempor. Aenean finibus euismod eros sed cursus. Ut vulputate leo id maximus consequat. Duis ac posuere neque, eu ultrices quam.";
})


const searchButton = document.querySelector(".btn-outline-success");

function button(event) {
    searchButton.textContent = "Searching!";
    window.open("https://google.com");
} searchButton.addEventListener("click", button);
searchButton.addEventListener("mouseover", function () {
    searchButton.style.backgroundColor = "red";

    searchButton.addEventListener("mouseout", function () {
        searchButton.style.backgroundColor = "";
    })
})


const question = document.querySelector("#faq")


function FAQ(event) {

    const confirmed = window.confirm("Are you ready to get all your questions answered?")

    if (!confirmed) {
        event.preventDefault();
    }
} question.addEventListener("click", FAQ);


const searchInput = document.querySelector(".form-control.me-2");

function search(event) {
    searchInput.value = "What cool things will you find?";
}
searchInput.addEventListener("click", search);

const email = document.querySelector("#userName");
const message = document.querySelector("#validationMessage");
const submitButton = document.querySelector("#submit");

email.addEventListener("input", function () {
    const minLength = 15;
    const value = email.value;

    if (value.length < minLength) {
        validationMessage.textContent = `Email must be at least ${minLength} characters long.`;
    } else {
        validationMessage.textContent = "";
    }
});

function navigate() {

    var startElement = document.getElementById('startItem');
    var targetElement = startElement.previousElementSibling;
    targetElement.style.color = 'red';
}


document.querySelector("#heading1").innerHTML = document.querySelector("#heading2").firstChild.nodeValue;
document.querySelector("#heading3").innerHTML = document.querySelector("#heading2").firstChild.nodeValue;



