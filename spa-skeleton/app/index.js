import { getRoutes } from './routes.js';

function route() {
    const routes = getRoutes()
    const windowHash = window.location.hash;

    let route = Object.values(routes).find(({ hash }) =>
        windowHash.startsWith(hash)
    );

    route = windowHash.startsWith(routes[0].hash);


   if (!route) {
        route = routes[0].hash;
    }
    routes[0].init();

    $("#container").on('click', function () {
        let imgId = $(this).attr('id');
        route = routes[1].hash;
        routes[1].init(1);
    })


}

window.onhashchange = route;
route();
