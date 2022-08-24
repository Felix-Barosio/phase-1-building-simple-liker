// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

document.querySelector("#modal").className = "hidden";
const likeBtn = document.querySelectorAll(".like-glyph");
function btnLikes() {
  likeBtn.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.innerHTML == EMPTY_HEART) {
        mimicServerCall("")
          .then(function (resp) {
            e.target.innerHTML = FULL_HEART;
            e.target.classList.add("activated-heart");
          })
          .catch(function (error) {
            let modal = document.querySelector("#modal");
            modal.classList.remove("hidden");
            modal.innerText = "Random server error. Try again.";
            setTimeout(() => {
              modal.classList.add("hidden");}, 3000);
          });
      } else {
        e.target.innerHTML = EMPTY_HEART;
        e.target.classList.remove("activated-heart");
      }
    });
  });
}
btnLikes();

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
