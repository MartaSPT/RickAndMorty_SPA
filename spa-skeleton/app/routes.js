import helloController from './controller/hello.js';
import singleCharController from './controller/singlepage-c.js';

export const hello = {
    hash: '#hello',
    init: helloController
};
export const character = {
    hash: '#character',
    init: singleCharController
};
