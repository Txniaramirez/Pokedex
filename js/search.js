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

        const pokeImagen = document.createElement('img')
        pokeImagen.src = result[14][1].front_default

    })
}