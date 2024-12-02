const BASE_URL = "http://localhost:3000/flowers";

async function getDetailsCard() {
  const res = await axios.get(`${BASE_URL}`);
  newCard(res.data);
}
getDetailsCard();

const card = document.querySelector(".row");

function newCard(element) {
  card.innerHTML = "";
  element.forEach((elem) => {
    card.innerHTML = `
         <div>
                 <img src="${elem.image}" alt="" style="width: 18rem; padding-left: 2rem; margin-top: 1rem">
                    <div class="title">
                        <h3 style="padding-left: 2rem; margin-top: 1rem ">${elem.title}</h3>
                        <p style="padding-left: 2rem ">${elem.price}</p>
                </div>
           </div>
     `;
    
  });
}
