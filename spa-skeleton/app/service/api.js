

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


export function getCard() {
    return lol();
}

export default async function getCharacter(id){
    let arr = await getCard();
    for(let i = 0; i < arr.length; i++){
        if(id===arr[i].id){
            return arr[i];
        }

    }

}





