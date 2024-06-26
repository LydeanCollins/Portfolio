document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init("jBFrbfBeKEGv0vZSs"); // Replace with your actual user ID
  console.log("EmailJS initialized");

  // Add event listener to the form
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
      sendMail();
    });
});

function sendMail() {
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  subject = document.getElementById("subject").value;
  message = document.getElementById("message").value;

  emailjs
    .send("service_1sligwk", "template_a7sidy5", {
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.log("FAILED...", error);
        document.getElementById("contact-form").reset();
        alert("Failed to send the message. Please try again.");
      }
    );
}

// Theme toggle button
const themeToggleBtn = document.querySelector(".theme-toggle");
const theme = localStorage.getItem("theme");
theme && document.body.classList.add(theme);
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
});

function showCustomAlert() {
  // Create a custom alert box with SweetAlert
  Swal.fire({
    title: "This is a Custom Alert title",
    text: "Welcome to geeksForGeeks",
    confirmButtonText: "OK",
  });
}

document.querySelectorAll(".project img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};
