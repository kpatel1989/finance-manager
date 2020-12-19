import axios from "axios";


export default class AccountEffect {
    static async saveAccount(acc) {
        const resp = await axios.post('/fakeAPI').then(() => {
            acc.id = !acc.id ? AccountEffect.accountCounter++ : acc.id;
            return acc;
        });
        return resp;
    }
    static accountCounter = 0;
}