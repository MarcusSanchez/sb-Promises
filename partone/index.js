let favorite = 7;
const URL = "http://numberapi.com/";


// Part 1.
document.getElementById("p1-btn").addEventListener("click", () => {
  fetch(`${URL}${favorite}?json`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("p1").innerText = data.text;
      document.getElementById("p1-btn").remove();
    });
});

// Part 2.
let favorites = [7, 31, 777];
document.getElementById("p2-btn").addEventListener("click", () => {
  fetch(`${URL}${favorites}?json`)
    .then(res => res.json())
    .then(data => {
      for (let key in data) {
        document.getElementById("p2").innerText += `${data[key]}\n`;
      }
      document.getElementById("p2-btn").remove();
    });
});

// Part 3.
document.getElementById("p3-btn").addEventListener("click", () => {
  Promise.all([
    fetch(`${URL}${favorite}?json`).then(res => res.json()),
    fetch(`${URL}${favorite}?json`).then(res => res.json()),
    fetch(`${URL}${favorite}?json`).then(res => res.json()),
    fetch(`${URL}${favorite}?json`).then(res => res.json())
  ]).then(facts => {
    facts.forEach(data => {
      document.getElementById("p3").innerText += `${data.text}\n`;
    })
    document.getElementById("p3-btn").remove();
  })
});
