const BASE_URL = "http://localhost:3000/flowers";
async function getFlowersCard() {
  const res = await axios.get(`${BASE_URL}`);
  newCard(res.data);
}
getFlowersCard();

const card = document.querySelector(".row");

function newCard(element) {
  card.innerHTML = "";
  element.forEach((elem) => {
    card.innerHTML += `
            <div class="col-12 col-sm-6 col-lg-4">
            <a href="./details.html"><i class="fa-solid fa-circle-info"></i></a>
                 <img src="${elem.image}" alt="">
                <div class="title">
                     <h3>${elem.title}</h3>
                     <p>$ ${elem.price}</p>
                </div>
            </div>
        `;
  });
}
