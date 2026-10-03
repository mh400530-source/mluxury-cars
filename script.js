document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");

  if (button) {
    button.addEventListener("click", () => {
      const carsSection = document.querySelector("#cars");

      if (carsSection) {
        carsSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }
});
