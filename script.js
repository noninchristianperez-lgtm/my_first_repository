const cards = [...document.querySelectorAll("[data-card]")];
const flipAllButton = document.querySelector("#flip-all");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});

let allFlipped = false;

flipAllButton.addEventListener("click", () => {
  allFlipped = !allFlipped;

  cards.forEach((card) => {
    card.classList.toggle("is-flipped", allFlipped);
  });

  flipAllButton.textContent = allFlipped ? "Mostrar frentes" : "Voltear todas";
});
