import axios from 'axios';
import authHeader from "./auth-header";
const LEVEL_URL = '/levels';

class LevelService {

    getLevels(level, userId) {
        return axios.get(LEVEL_URL + `/?level=${level}&userId=${userId}`, {headers: authHeader()});
    }

    postLevel(levelObject) {
        axios.post(LEVEL_URL, levelObject).then(res => {
            console.log(res);
            console.log(res.status);
        })
    }

}
export default new LevelService();
