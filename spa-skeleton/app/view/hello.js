export default function render(message1, arr) {
    $('#container1').empty().append($('<h1 id = "title">' + message1 + '</h1>'));

    getForm();
    getCard(arr);


    
    document.getElementById("search").addEventListener("keyup", function displaySearch() {
        let input = document.getElementById("search").value.toLowerCase();
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            //console.log(arr[i].name.toLowerCase().includes(input));

            if (arr[i].name.toLowerCase().includes(input)) {
                newArr.push(arr[i]);
            }
        }
console.log(newArr);
        getCard(newArr);
    });

}

function getCard(arr) {
    $('.card').remove();
    let card;

    for (let i = 0; i < arr.length; i++) {
        let image = arr[i].image;
        let idChar = arr[i].id;

        card = '<div class="card" id = "' + idChar + '"><img src= "' + image + '" </img><p id="nameChar">' + arr[i].name + '</p></div>';

        $('#container').append(card);

        let cards = document.getElementsByClassName("card");
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("click", function displayCharacter() {
                window.location.hash = '#character/' + arr[i].id;
            });
        }
    }
}

function getForm() {
    let form = '<div><input type="text" id="search" placeholder ="search" /></div>';
    $('#container').append(form);
}

