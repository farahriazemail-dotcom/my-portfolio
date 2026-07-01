
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
   const typed = new Typed('.multiple-text', {
      strings: ['Software Quality Assurance Engineer','Python Enthusiast','Backend AI Engineer -Intern'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1200,
      loop: true
    });