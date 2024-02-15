import { getCard } from '../service/api.js';
import singlePageView from '../view/singlepage-v.js';


export default async function init(id) {
    let arr = await getCard ();
    singlePageView(arr, id);
}

