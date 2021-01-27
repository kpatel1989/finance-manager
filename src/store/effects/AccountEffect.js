import axios from "axios";
import {HOST, API} from '../../assets/consts/apis';

export default class AccountEffect {
    static async saveAccount(acc) {
        return await axios.post(HOST + API.ACCOUNTS_API, acc).then((res) => {
            return res.data;
        });
    }

    static async fetchAll() {
        return await axios.get(HOST + API.ACCOUNTS_API).then((res) => {
            return res.data;
        });
    }
}