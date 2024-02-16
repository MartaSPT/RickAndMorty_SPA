export default function render(character) {
         
        $('#container').empty();

      let card = '<div>' +
        '<p><strong>Name: </strong>' +
        character.name +
        '</p>' +
        '<p><strong>Gender: </strong>' +
        character.gender +
        '</p>' +
        '<p><strong>Specie: </strong>' +
         character.species +
        '</p>' +
        '<p><strong>Location: </strong>' +
        character.location.name +
        '</p>' +
        '<p><strong>Status: </strong>' +
        character.status +
        '</p>' +
        '</div>';

        let button = '<div><button id="back">Go Back</button></div>';
        $('#container').append(card + button);


        document.getElementById("back").addEventListener("click", function displayHomePage (){
                window.location.hash = '#hello';
                $('#container').empty(); 
        });
}
