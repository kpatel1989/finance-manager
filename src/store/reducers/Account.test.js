import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducer, { saveAccount, initialAccountState } from './Account';
import AccountEffect from '../effects/AccountEffect';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore(reducer);

jest.mock('../effects/AccountEffect');

describe('Accounts reducer', () => {
    beforeEach(() => {
        AccountEffect.mockClear();
    })
    it('should initiate the state', () => {
        expect(reducer(initialAccountState, {})).toEqual({
            accounts: [],
            status: 'idle',
            error: null
        })
    });
    it('should add an account to store', () => {
        const acc = {
            id: 0,
            accountName: 'AccountName',
            accountType: 'AccountType',
            bankName: 'BankName',
            currentAmount: 'CurrentAmount',
            accountNumber: 'AccountNumber'
        };
        expect(reducer(initialAccountState, {
            type: 'accounts/addAccount',
            payload: acc
        })).toEqual({
            accounts: [acc],
            status: 'idle',
            error: null
        });
    });
    it('should add 10 accounts to store', () => {
        const acc = [];
        let lastState = initialAccountState;
        for (let step = 0; step < 10; step++) {
            acc.push({
                id: step,
                accountName: 'AccountName',
                accountType: 'AccountType',
                bankName: 'BankName',
                currentAmount: 'CurrentAmount',
                accountNumber: 'AccountNumber'
            });
            lastState = reducer(lastState, {
                type: 'accounts/addAccount',
                payload: acc[step]
            })
        }

        expect(lastState).toEqual({
            accounts: acc,
            status: 'idle',
            error: null
        });
    });
    it ('should remove an account from store', () => {
        const acc = {
            id: 0,
            accountName: 'AccountName',
            accountType: 'AccountType',
            bankName: 'BankName',
            currentAmount: 'CurrentAmount',
            accountNumber: 'AccountNumber'
        }
        let lastState = reducer(initialAccountState, {
            type: 'accounts/addAccount',
            payload: acc
        });
        lastState = reducer(initialAccountState, {
            type: 'accounts/removeAccount',
            payload: acc
        });
        expect(lastState).toEqual({
            accounts: [],
            status: 'idle',
            error: null
        })
    })
    it('should remove 5 out of 10 accounts to store', () => {
        const acc = [];
        let lastState = initialAccountState;
        for (let step = 0; step < 10; step++) {
            acc.push({
                id: step,
                accountName: 'AccountName',
                accountType: 'AccountType',
                bankName: 'BankName',
                currentAmount: 'CurrentAmount',
                accountNumber: 'AccountNumber'
            });
            lastState = reducer(lastState, {
                type: 'accounts/addAccount',
                payload: acc[step]
            })
        }

        expect(lastState).toEqual({
            accounts: acc,
            status: 'idle',
            error: null
        });
        let removedItem = acc.splice(0,1)[0];
        lastState = reducer(lastState, {
            type: 'accounts/removeAccount',
            payload: {id: removedItem.id}
        });
        removedItem = acc.splice(1,1)[0];
        lastState = reducer(lastState, {
            type: 'accounts/removeAccount',
            payload: {id: removedItem.id}
        });
        removedItem = acc.splice(3,1)[0];
        lastState = reducer(lastState, {
            type: 'accounts/removeAccount',
            payload: {id: removedItem.id}
        });

        expect(lastState).toEqual({
            accounts: acc,
            status: 'idle',
            error: null
        });
    });
    it('should dispatch saveAccount action and update store', () => {
        const resp = {
            id: 0,
            accountName: 'AccountName',
            accountType: 'AccountType',
            bankName: 'BankName',
            currentAmount: 'CurrentAmount',
            accountNumber: 'AccountNumber'
        }

        AccountEffect.saveAccount.mockResolvedValue(resp);

        store.dispatch(saveAccount(resp));
        expect(AccountEffect.saveAccount).toBeCalledTimes(1);


    })
})