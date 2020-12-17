export default class AccountEffect {
    static async saveAccount(acc) {
        acc.accountId = !acc.accountId ? AccountEffect.accountCounter++ : acc.accountId;
        return Promise.resolve(acc);
    }
    static accountCounter = 0;
}