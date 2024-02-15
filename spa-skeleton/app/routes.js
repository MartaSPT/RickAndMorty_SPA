import helloController from './controller/hello.js';
import singleCharController from './controller/singlepage-c.js';

const arrRoute = [{
    hash: '#hello',
    init: helloController
},
{
    hash: '#character',
    init: singleCharController
}];

export function getRoutes (){
    return arrRoute;
}


//as rotas terão de estar todas num array