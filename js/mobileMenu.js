document.addEventListener("DOMContentLoaded", () => {
  const aiTutor = document.querySelector(".aiTutor");
  const chatIcon = document.querySelector(".aiIcon");

  aiTutor.addEventListener("click", () => {
    aiTutor.classList.add("hidden");
    chatIcon.classList.remove("hidden");
  });

  chatIcon.addEventListener("click", () => {
    aiTutor.classList.remove("hidden");
    chatIcon.classList.add("hidden");
  });

});

document.addEventListener("DOMContentLoaded", () => {


  const moduleMenu = document.querySelector(".moduleMenu");
  const moduleButton = document.querySelector(".moduleMenuButton");

  moduleMenu.addEventListener("click", () => {
    moduleMenu.classList.add("hidden");
    moduleButton.classList.remove("hidden");
  });
  moduleButton.addEventListener("click", () => {
    moduleButton.classList.add("hidden");
    moduleMenu.classList.remove("hidden");
  });


});