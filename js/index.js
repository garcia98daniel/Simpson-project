const grid = document.querySelector(".grid");

const fetchCharacters = (quantity) =>{

    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${quantity}`)
    .then((response) => response.json())
    .then(data => {
        // console.log(data)
        var characthers = [];
        data = data.filter((item) => characthers[item.character] ? false :  characthers[item.character] = true);
        createCharacterCards(data)
    })

}

fetchCharacters(50)

// const search_btn = document.querySelector(".search_btn");
const search_input = document.querySelector(".search_input");

const fetchCharacterByName = (event) => {
    console.log(event.target.value)
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${event.target.value}`)
    .then((response) => response.json())
    .then(data => {
        createCharacterCards(data)
    })
}

search_input.addEventListener("change", fetchCharacterByName);

const createCharacterCards = (data) =>{
    let cards = "";
    data.forEach(item => {
        cards += `
        <div class="character_card">
            <div class="character_car">
                <div class="img_container">
                    <img class="character_img" src=${item.image} alt="">
                </div>
                <div class="info_character">
                    <h4 class="character_name">${item.character}</h4>
                    <small>${item.character} dice:</small>
                    <p>
                        ${item.quote}
                    </p>
                </div>
            </div>
        </div>
        `;
    });

    grid.innerHTML = cards;
}