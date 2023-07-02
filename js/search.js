const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
const pokemon = document.getElementById('pokeName')
const buttonSearch = document.getElementById('searchPokemon')
const appNode = document.getElementById('app')

buttonSearch.addEventListener('click', insertarPokemon)

function insertarPokemon(){
    window.fetch(`${baseURL}${pokemon.value.toLowerCase()}`)
    .then(response =>{
        if(response.status === 404){
            alert('Este pokemon no esta disponible')
        }else{
            return response.json()
        }
    })
    .then(responseJSON => {
        const allItems = []
        const result = []

        for(let pokeInfo in responseJSON){
            result.push([pokeInfo, responseJSON[pokeInfo]])
        }

        console.table(result)

        const div = document.createElement("div");
        div.classList.add("pokemon-card");
        div.innerHTML = `
            <div class="pokemon-imagen-card">
                <img src="${result[14][1].front_default}" alt="${result[10][1]}">
            </div>
            <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <p class="pokemon-id">#${result[6][1]}</p>
                    <h2 class="pokemon-nombre">${result[10][1]}</h2>
                </div>
                <div class="pokemon-tipos">
                    <p class="${result[16][1][0].type.name} tipo">${result[16][1][0].type.name}</p>
                </div>
                <div class="pokemon-peso-altura">
                    <p class="altura">${result[4][1]}m</p>
                    <p class="peso">${result[17][1]}kg</p>
                </div>
                <div class="pokemon-stats">
                    <div class="stats">
                        <p class="stat-name">${result[15][1][0].stat.name}</p>
                        <p class="stat">${result[15][1][0].base_stat}</p>
                    </div>
                    <div class="stats">
                        <p class="stat-name">${result[15][1][1].stat.name}</p>
                        <p class="stat">${result[15][1][1].base_stat}</p>
                    </div>
                    <div class="stats">
                        <p class="stat-name">${result[15][1][2].stat.name}</p>
                        <p class="stat">${result[15][1][2].base_stat}</p>
                    </div>
                    <div class="stats">
                        <p class="stat-name">${result[15][1][3].stat.name}</p>
                        <p class="stat">${result[15][1][3].base_stat}</p>
                    </div>
                    <div class="stats">
                        <p class="stat-name">${result[15][1][4].stat.name}</p>
                        <p class="stat">${result[15][1][4].base_stat}</p>
                    </div>
                    <div class="stats">
                        <p class="stat-name">${result[15][1][4].stat.name}</p>
                        <p class="stat">${result[15][1][4].base_stat}</p>
                    </div>
                </div
            </div>
        `;
        app.append(div);
    })
}
