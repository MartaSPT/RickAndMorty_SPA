export default function render(message1, arr) {
    $('#title').empty().append($('<h1>').text(message1));
    let card;
    for (let i = 0; i<arr.length; i++){
        let image = arr[i].image;
        let idChar = arr[i].id;
    
         card ='<div class="card" id = "'+idChar+'"><img src= "' + image + '" </img><p id="nameChar">' + arr[i].name + '</p></div>';
        $('#container').append(card);
    }
    
}

