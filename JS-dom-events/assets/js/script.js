import { products } from "./data.js";
const tBody = document.querySelector("tbody");
const searchInput = document.querySelector(".search");
const ascBtn = document.querySelector(".asc");
const descBtn = document.querySelector(".desc");
const defaultBtn = document.querySelector(".default");
const sortBtn = document.querySelector(".sort-btn");
const categorySelect = document.querySelector("#category");

const productForm = document.querySelector("form");

//draw table
function drawTable(array) {
  tBody.innerHTML = "";
  array.forEach((product) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
                <td><img src="${product.image}" width="100"/></td>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.category}</td>
                <td>${product.rating.rate}</td>
                <td><button class="btn btn-danger delete" data-id=${product.id} >delete</button></td>
    `;

    tBody.appendChild(trElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete");
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      //   console.log(this);
      //   this.parentElement.parentElement.remove();
      const id = this.getAttribute("data-id");
      const idx = products.findIndex((p) => p.id == id);
      //   console.log(idx);

      Swal.fire({
        title: "Are you sure to delete product!?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct(id, idx, this);

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
}

drawTable(products);

//delete product
function deleteProduct(productId, index, btn) {
  btn.closest("tr").remove();
  products.splice(index, 1);
  console.log(products);
  //   drawTable(products);
}
//search by title
searchInput.addEventListener("input", function (e) {
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(e.target.value.toLowerCase().trim())
  );
  //   console.log(filteredProducts);
  drawTable(filteredProducts);
});

ascBtn.addEventListener("click", function () {
  const sortedProducts = products.toSorted((a, b) => a.price - b.price);
  drawTable(sortedProducts);
});
descBtn.addEventListener("click", function () {
  const sortedProducts = products.toSorted((a, b) => b.price - a.price);
  drawTable(sortedProducts);
});
defaultBtn.addEventListener("click", function () {
  drawTable(products);
});

sortBtn.addEventListener("click", function () {
  let sorted;

  //   console.log(event.target.textContent);
  if (this.textContent === "Sort ASC") {
    this.textContent = "Sort DESC";
    sorted = products.toSorted((a, b) => a.price - b.price);
  } else if (this.textContent === "Sort DESC") {
    this.textContent = "Default";
    sorted = products.toSorted((a, b) => b.price - a.price);
  } else {
    this.textContent = "Sort ASC";
    sorted = structuredClone(products);
  }

  drawTable(sorted);
});

//filter by category

categorySelect.addEventListener("change", function () {
  //   console.log(this.value);
  const filteredProducts = products.filter((p) => p.category === this.value);
  if (this.value !== "all") {
    drawTable(filteredProducts);
  } else {
    drawTable(products);
  }
});

//add product

productForm.addEventListener("submit", function (event) {
  event.preventDefault();
});