import { carsData } from "./data.js";
const card = document.querySelector(".row")
function newCard(element){
    card.innerHTML = "";
    element.forEach((elem) => {
        card.innerHTML += `
                        <div class="card" style="width: 18rem; height: 20rem;">
                            <div class="d-flex justify-content-between">
                                <p>${elem.name}</p>
                                <span><i class="fa-solid fa-heart fa-sm"></i></span>
                            </div>
                            <div>
                            <p>${elem.type}</p>
                            <img class="car-images" src="${elem.image}">
                           </div>
                            <div>
                                <span><img src="./assets/image/gas-station.png" alt="">${elem.fuel}</span>
                                <span><img src="./assets/image/Car.png" alt="">${elem.transmission}</span>
                              </div>
                              <span><img src="./assets/image/profile-2user.png" alt="">${elem.passengers}</span>
                            <div class="d-flex justify-content-between mt-3">
                                <span>$${elem.price}/</span>
                                <a href="basket.html" class="btn btn-primary">Add Basket</a>
                            </div>
                        </div>
        `
    });
}
newCard(carsData);