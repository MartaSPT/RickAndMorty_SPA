import helloView from '../view/hello.js';
import { getTitle } from '../service/title.js';
import { getCard } from '../service/api.js';


export default async function init() { //transformar isto numa async and wait
    const {name} = getTitle();
    const batata = await getCard (); //wait

    helloView(`${name}`, batata);
   
}
