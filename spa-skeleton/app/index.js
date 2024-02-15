import {getRoutes} from './routes.js';

function route() {
    const routes = getRoutes()
    console.log(routes);
    const windowHash = window.location.hash;

    let route = Object.values(routes).find(({hash}) =>
        windowHash.startsWith(hash)
    );

    if (!route) {
        route = routes[1].hash;
    }

    routes[1].init();

    $(".card").on('click',  function(){
        console.log('ffff');
        let imgId = $(this).attr('id');
        window.location.hash = route[2].hash; 
        route.character.init(imgId);

    })


}

window.onhashchange = route;
route();
