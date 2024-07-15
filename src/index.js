let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
fetch ('http://localhost:3000/toys/1')
.then(res => res.json())
.then((json) => console.log (json))document.addEventListener("DOMContentLoaded", () => {
  // URL to fetch the toys
  const toysUrl = "http://localhost:3000/toys";

  // Function to fetch all toys
  function fetchToys() {
    fetch(toysUrl)
      .then(response => response.json())
      .then(toys => {
        toys.forEach(toy => {
          createToyCard(toy);
        });
      })
      .catch(error => console.error("Error fetching toys:", error));
  }

  // Function to create a toy card
  function createToyCard(toy) {
    const toyCollection = document.getElementById("toy-collection");

    const card = document.createElement("div");
    card.className = "card";

    const h2 = document.createElement("h2");
    h2.textContent = toy.name;

    const img = document.createElement("img");
    img.src = toy.image;
    img.className = "toy-avatar";

    const p = document.createElement("p");
    p.textContent = `${toy.likes} Likes`;

    const button = document.createElement("button");
    button.className = "like-btn";
    button.textContent = "Like ❤️";

    card.append(h2, img, p, button);
    toyCollection.appendChild(card);
  }

  // Fetch toys when the DOM is loaded
  fetchToys();
});
