const submitBtn = document.querySelector('button[type="submit"]');
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

submitBtn.addEventListener("click", (e) => {
  document.querySelectorAll("input").forEach((input) => {
    if (
      input.type === "email" &&
      (!input.value.match(emailPattern) || input.value === "")
    ) {
      input.value = "";
      input.placeholder = "email@example.com";
      showError();
    } else if (input.value === "") {
      input.placeholder = "";
      showError();
    } else {
      input.classList.remove("error");
    }

    function showError() {
      input.classList.add("error");
      e.preventDefault();
    }
  });
});
