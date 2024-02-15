export default function render(arr, id) {
         
        $('#container').empty();

      let card = '<div>' +
        '<p><strong>Name: </strong>' +
        arr[id].name +
        '</p>' +
        '<p><strong>Gender: </strong>' +
        arr[id].gender +
        '</p>' +
        '<p><strong>Specie: </strong>' +
        arr[id].species +
        '</p>' +
        '<p><strong>Location: </strong>' +
        arr[id].location.name +
        '</p>' +
        '<p><strong>Status: </strong>' +
        arr[id].status +
        '</p>' +
        '</div>';        
        
        $('#container').append(card);

}
