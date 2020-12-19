export default class AccountEffect {
    static async saveAccount(acc) {
        acc.id = !acc.id ? AccountEffect.accountCounter++ : acc.id;
        return Promise.resolve(acc);
    }
    static accountCounter = 0;
}