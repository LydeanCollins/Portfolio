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

let isSending = false;

function sendMail(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Prevent multiple sends
  if (isSending) return;
  isSending = true;

  // Get the values from the form fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Check if any of the fields are empty
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields before sending.");
    isSending = false;
    return; // Exit the function if any field is empty
  }

  // Send the email using EmailJS if all fields are filled
  emailjs
    .send("service_1sligwk", "template_a7sidy5", {
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
    .then(
      function (response) {
        alert("SUCCESS!", response.status, response.text);
        document.getElementById("contact-form").reset();
        isSending = false;
      },
      function (error) {
        console.log("FAILED...", error);
        document.getElementById("contact-form").reset();
        alert("Failed to send the message. Please try again.");
        isSending = false;
      }
    );
}

// Attach the sendMail function to the form submission event
document.getElementById("contact-form").addEventListener("submit", sendMail);

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
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};

function showsidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function closesidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
