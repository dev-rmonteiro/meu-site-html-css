document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".accordion-btn").forEach(button => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const isOpen = content.style.display === "block";
        content.style.display = isOpen ? "none" : "block";
      });
    });
  });