
fetch("https://northwind.vercel.app/api/suppliers/"+id)
    .then((response) => response.json())
    .then((data) => detailsPage(data))

const goBack = document.querySelector(".go-back");
 goBack.addEventListener("click", ()=>{
    window.history.back()
})

const divContainer = document.querySelector(".container");
function detailsPage(element) {
    divContainer.innerHTML = ""
    element.forEach(elem => {
        divContainer.innerHTML = `
         <h1>Product Details</h1>
        <h2>Company Name: ${elem.companyName}</h2>
        <p>Contact Name: ${elem.contactName}</p>
        <p>Contact Title: ${elem.contactTitle}</p>
        <button class="btn data-id=${elem.id} go-back btn-primary">Go Back</button>
        `
    });
    
}
