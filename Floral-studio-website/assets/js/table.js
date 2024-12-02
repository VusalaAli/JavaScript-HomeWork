const BASE_URL = "http://localhost:3000/flowers";

async function getFlowerTable() {
    const res = await axios.get(`${BASE_URL}`);
    drawTable(res.data);
  }
  getFlowerTable();
  
  const table = document.querySelector("tbody");
  function drawTable(element) {
    table.innerHTML = "";
    element.forEach((elem) => {
      table.innerHTML += `
                      <tr>
                          <td><img src="${elem.image}" alt="" class="w-25"></td>
                          <td>${elem.title}</td>
                          <td>${elem.price}</td>
                          <td><button type="button" class="delete btn btn-danger" data-id=${elem.id}>Delete</button></td>
                      </tr>
     `;
      const deleteBtns = document.querySelectorAll(".delete");
      deleteBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          const id = this.getAttribute("data-id");
          deleteFlower(id);
        });
      });
    });
  }
  

  async function deleteFlower(id) {
    await axios.delete(`${BASE_URL}/${id}`);
    getFlowerTable();
  }
  