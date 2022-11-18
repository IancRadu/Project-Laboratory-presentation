// const data = { username: "example" };
// fetch("https://data.mongodb-api.com/app/data-ksfkk/endpoint/data/beta", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Request-Headers": "*",
//     "api-key": "61ec1bccfa1557edc089824a",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   //Then with the data from the response in JSON...
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   //Then with the error genereted...
//   .catch((error) => {
//     console.error("Error:", error);
//   });

const loginOpenModal = document.querySelector(".header .screen-login");
const loginButton = document.querySelector(".user-bar .btn");
const loginModalExit = document.querySelector(".login-new-side .icon-close");

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  loginOpenModal.classList.toggle("hidden");
});
loginModalExit.addEventListener("click", function (e) {
  e.preventDefault();
  loginOpenModal.classList.toggle("hidden");
});
