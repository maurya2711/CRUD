// console.log("Update Button clicked");

const update = document.querySelector("#update-button");
console.log("Update Button clicked");

update.addEventListener("click", (_) => {
  fetch("/products/create", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Darth Vadar",
      quote: "I find your lack of faith disturbing.",
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      console.log(response);
    });
});
