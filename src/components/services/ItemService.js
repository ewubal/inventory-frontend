import axios from 'axios';
import authHeader from "./auth-header";
const ITEMS_URL = '/items';

class ItemService {

    getItems(level, userId) {
        return axios.get(ITEMS_URL + `/?level=${level}&userId=${userId}`, {headers: authHeader()});
    }

    getSearchItems(userId, search) {
        return axios.get(ITEMS_URL + `/search/?userId=${userId}&search=${search}`, {headers: authHeader()});
    }

    deleteItem(itemId) {
        return axios.delete(ITEMS_URL + `/${itemId}`)
    }

    saveObject(item) {
        axios.post(ITEMS_URL, item).then(res => {
            console.log(res);
            console.log(res.status);
        })
    }

    updateItem(itemId, item) {
        axios.put(ITEMS_URL + `/${itemId}`, item).then(res => {
            console.log(res);
        })
    }

}
export default new ItemService();
