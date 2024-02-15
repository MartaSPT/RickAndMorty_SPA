export default function render(message1, arr) {
    $('#container1').append($('<h1 id = "title">' + message1 + '</h1>'));
    
    let card;
    for (let i = 0; i<arr.length; i++){
        let image = arr[i].image;
        let idChar = arr[i].id;
    
         card ='<div class="card" id = "'+idChar+'"><img src= "' + image + '" </img><p id="nameChar">' + arr[i].name + '</p></div>';
        $('#container').append(card);
    }
    
}

