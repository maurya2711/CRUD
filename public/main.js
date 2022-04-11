// console.log("Update Button clicked");

// const { post } = require("../routes/product.routes");

const update = document.querySelector("#update-button");
const deleteButton = document.querySelector("#delete-button");
console.log("Update Button clicked");

update.addEventListener("click", (_) => {
  // let name = document.getElementById("updateName").value;
  // let quote = document.getElementById("update-quote").value;
  console.log("Update Button clicked", name);
  fetch("/products/create", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Darth Vader",
      quote: "Luke I find you lack of faith disturbing",
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      console.log(response);
      // window.location.reload(true);
    });
  null;
});

deleteButton.addEventListener("click", (_) => {
  let ele = document.getElementById("input").value;
  console.log("Delete Button clicked", ele);
  //
  fetch("/products/create", {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: ele,
      // quote: "I find your lack of faith disturbing.",
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      console.log("delete Response", response);
      window.location.reload();
    });
});
