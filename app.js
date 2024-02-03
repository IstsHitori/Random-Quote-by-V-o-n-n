const apiURL = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const regroupBtn = document.querySelector(".regroup-btn");

document.addEventListener("DOMContentLoaded", function (){
    cargarAPI();

    regroupBtn.addEventListener("click", cargarAPI);
});

const cargarAPI = async () => {
    await fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            montarAPI(data);
    });
}

const montarAPI = (data)=> {
    limpiarHTML();
    const {author,content,tags} = data;

    const autor = document.createElement("p");
    autor.textContent = author;
    autor.classList.add("autor")

    const contenido = document.createElement("p");
    contenido.textContent =  `"${content}"`;
    contenido.classList.add("contenido");

    const etiquetaContainer = document.createElement("div");
    etiquetaContainer.classList.add("etiqueta-container");
    tags.forEach(element => {
        const etiqueta = document.createElement("p");
        etiqueta.textContent = element;
        etiqueta.classList.add("etiqueta");
        etiquetaContainer.appendChild(etiqueta);
    });

    quote.appendChild(autor);
    quote.appendChild(etiquetaContainer);
    quote.appendChild(contenido);

}

function limpiarHTML(){
    while(quote.firstChild){
        quote.removeChild(quote.firstChild);
    }
}