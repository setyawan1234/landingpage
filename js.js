// untuk warna scroll navbar
const navBar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("active", windowPosition)
});

// untuk input dan validasi form
function submit(event) {
    event.preventDefault();

    const inputElements = {
        firstName: document.getElementById("inputFirstName"),
        lastName: document.getElementById("inputLastName"),
        description: document.getElementById("inputSubject"),
        email: document.getElementById("inputEmail"),
        phone: document.getElementById("inputPhone")
    };

    // object untuk menampung nilai input
    const formValues = {};

    // mengambil nilai input, disimpan ke dalam formValues
    for (const data in inputElements) {
        formValues[data] = inputElements[data].value;
    }

    // validasi form
    if (formValues.firstName.trim() === "" ||
        formValues.lastName.trim() === "" ||
        formValues.description.trim() === "" ||
        formValues.phone.trim() === "") {
        alert("Please fill in all required fields -_-")
    } else if (!formValues.email.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
    } else{
        alert("Thanks for contacting me!\n Your message is \nName: " + formValues.firstName + " " + formValues.lastName + "\nDescription: " +
        formValues.description + "\nEmail: " + formValues.email + "\nPhone: " + formValues.phone);
    }

    // reset form input
    for (const data in inputElements) {
        inputElements[data].value = "";
    }
}

const btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click", submit)
