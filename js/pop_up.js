var call_btn  = document.querySelector(".call-back-btn");
var pop_up    = document.querySelector(".appointment-form");

var close     = document.querySelector(".modal-close");

var user_name = pop_up.querySelector("[name=user-name]");
var user_email = pop_up.querySelector("[name=user-email]");
var user_speech = pop_up.querySelector("[name=user-speech]");

var isStorageSupport = true;
var storage_name = "";
var storage_email = "";

try {
  storage_name = localStorage.getItem("user_name");
  storage_email = localStorage.getItem("user_email");
}
catch(err) {
  isStorageSupport = false;
}

call_btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  pop_up.classList.add("modal-show");
  if(storage_name && storage_email) {
    user_name.value = storage_name;
    user_email.value = storage_email;
    user_speech.focus();
  }
  else {
    user_name.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  pop_up.classList.remove("modal-show");
  pop_up.classList.remove("modal-error");
});

pop_up.addEventListener("submit", function(evt) {
  if(!user_name.value || !user_email.value || !user_speech.value) {
    pop_up.classList.remove("modal-error");
    pop_up.offsetWidth = pop_up.offsetWidth;
    evt.preventDefault();
    pop_up.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("user_name", user_name.value);
      localStorage.setItem("user_email", user_email.value);
    }
  }
});
