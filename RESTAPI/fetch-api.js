
const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
        return response.json();
    })
    .then(pokemon => {
        console.log(pokemon);
    })
    .catch(error => {
        console.log(error);
    });
