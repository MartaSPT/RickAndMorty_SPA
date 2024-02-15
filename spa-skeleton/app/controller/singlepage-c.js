import { getCard } from '../service/api.js';
import singlePageView from '../view/singlepage-v.js';


export default function init(id) {
    console.log(getCard())
    singlePageView(getCard, id);
}
