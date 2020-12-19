import AccountEffect from './AccountEffect';
import axios from "axios";
jest.mock("axios");

describe('Account Effect', () => {
    it('should call the save account API', async () => {
        const input = {
            accountName: 'AccountName',
            accountType: 'AccountType',
            bankName: 'BankName',
            currentAmount: 'CurrentAmount',
            accountNumber: 'AccountNumber'
        };
        const output = Object.assign({} , input);
        output.id = 0;
        axios.post.mockResolvedValue(output)
        const res = await AccountEffect.saveAccount(input);
        expect(res.id).not.toBeNull;
        expect(res).toEqual(output);
    })
})