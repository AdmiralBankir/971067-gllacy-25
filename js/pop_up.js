var call_btn  = document.querySelector(".call-back-btn");
var pop_up    = document.querySelector(".appointment-form");
var close     = document.querySelector(".modal-close");
var user_name = pop_up.querySelector("[name=user-name]");


call_btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  pop_up.classList.add("modal-show");
  user_name.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  pop_up.classList.remove("modal-show");
});
