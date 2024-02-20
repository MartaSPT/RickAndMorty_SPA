import getCharacter  from '../service/api.js';
import singlePageView from '../view/singlepage-v.js';


export default async function init() {
    let url = (window.location).toString();
    url = url.split("/");
    let id = parseInt(url[url.length-1]);
    
    let character = await getCharacter(id);
    singlePageView(character);
}

