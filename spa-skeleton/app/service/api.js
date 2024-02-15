

//let url = 'https://rickandmortyapi.com/api/character`;

function getAPI() {
    return new Promise((resolve, reject) => {
        $.getJSON({
            url: `https://rickandmortyapi.com/api/character`,
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        })
    })
}


async function lol() {
    try {
        const result = await getAPI();
        return result.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}


/*
fazer uma função getJSON
e dps outra função async and wait onde guardo a resposta


   
  let chara =  function async fetchChar () { 
    fetch(url)
    .then(response => {
        //console.log(response)
        return response.json()
    })
    .then((response) => {
        console.log(response.results);
        return response.results;
    })
}
*/

export function getCard() {
    //console.log(lol());
    return lol();
}





