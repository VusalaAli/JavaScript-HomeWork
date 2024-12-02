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
    <div class="flower-card">
    <a href="details.html?id=${elem.id}"><i class="fa-solid fa-circle-info"></i></a>
    <img src="${elem.image}" alt="">
    <div class="title">
    <h3>${elem.title}</h3>
    <p>$ ${elem.price}</p>
    </div>
              </div>
            </div>
            `;
  });
}

const editForm = document.querySelector("#edit-form")
const flowerName = document.querySelector("#flower-name")
const flowerImage = document.querySelector("#flower-image")
const flowerPrice = document.querySelector("#flower-price")
editForm.addEventListener("submit",  async function(e){
    e.preventDefault();

    let newData = {
        name: flowerName.value.trim(),
        image:  flowerImage.value.trim(),
        image: flowerPrice.value.trim()
    };
    try{
        const res = await axios.post(`${BASE_URL}`, newData);
    console.log(res.data);
    addnewData(newData)
    } catch (error){
        console.log(error)
    }
    editForm.reset()
  });

    function addnewData(){
        
    if(newName && newImage && newPrice) {
        const newCard = document.createElement("div")
        newCard.className = "card mb-3";
        newCard.innerHTML = `
        <img src="{newImage}" class="card-img-top">
        <div class="card-body">
           <h5 class="card-name">{flowerName}</h5>
           <p class="card-price">{flowerPrice}</p>
        </div>       
        `;

        const cardContainer = document.querySelector("#card-container")
        cardContainer.appendChild(newCard);
    }
    }
