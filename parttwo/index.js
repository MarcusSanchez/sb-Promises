const URL = "https://deckofcardsapi.com/api";

// Part 1:
fetch(`${URL}/deck/new/draw`).then(data => {
  let { suit, value } = data["cards"][0];
  console.log(`${value} of ${suit}`);
})


// Part 2:
let fcard;
fetch(`${URL}/deck/new/draw`)
  .then(data => {
    fcard = data["cards"][0];
    let deckId = data["deck_id"];
    return fetch(`${URL}/deck/${deckId}/draw`);
  })
  .then(data => {
    let scard = data["cards"][0];
    console.log(`${fcard["value"]} of ${fcard["suit"]}`);
    console.log(`${scard["value"]} of ${scard["suit"]}`);
  });

// Part 3:
let deckId;

fetch(`${URL}/deck/new/shuffle/`)
  .then(response => response.json())
  .then(data => {
    deckId = data["deck_id"];
  });

document.getElementById('btn').addEventListener('click', () => {
  fetch(`${URL}/deck/${deckId}/draw/`)
    .then(response => response.json())
    .then(data => {
      const { suit, value } = data["cards"][0];
      document.getElementById("cards").innerHTML += `<li>${value} of ${suit}</li>`;

      if (data["remaining"] === 0) document.getElementById("btn").remove();
    });
});
