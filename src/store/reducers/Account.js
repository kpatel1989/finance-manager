import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AccountEffect from '../effects/AccountEffect';

export const initialAccountState = {
    accounts: [],
    status: 'idle',
    error: null
}
// selectors
export const selectAllAccounts = state => state.accounts.accounts;
export const accountLoadStatus = state => state.accounts.status;

// thunk actions
export const saveAccount = createAsyncThunk('accounts/saveAccount', AccountEffect.saveAccount)

export const fetchAllAccounts = createAsyncThunk('accounts/fetchAll', AccountEffect.fetchAll)

export const accountSlice = createSlice({
    name: 'accounts',
    initialState: initialAccountState,
    reducers: {
        addAccount: (state, action) => {
            const account = action.payload;
            if (account.id !== null && account.id !== undefined) {
                let acc = {
                    id: account.id,
                    accountName: account.accountName,
                    accountType: account.accountType,
                    bankName: account.bankName,
                    currentAmount: account.currentAmount,
                    accountNumber: account.accountNumber
                }
                state.accounts.push(acc);
            }
            return state;
        },
        removeAccount: (state, action) => {
            const id = action.payload.id;
            if (id !== null && id !== undefined) {
                const ac = state.accounts.find(a => a.id === id);
                if (ac) {
                    state.accounts.splice(state.accounts.indexOf(ac), 1);
                }
            }
            return state;
        }
    },
    extraReducers: {
        [saveAccount.fulfilled]: (state, action) => {
            state.status = 'success';
            state.error = '';
            state.accounts.push(action.payload);
            return state;
        },
        [saveAccount.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
            state.accounts = [];
            return state;
        },
        [saveAccount.pending]: (state, action) => {
            state.status = 'loading';
            return state;
        },
        [fetchAllAccounts.fulfilled]: (state, action) => {
            state.status = 'success';
            state.error = '';
            state.accounts = state.accounts.concat(action.payload);
            return state;
        },
        [fetchAllAccounts.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
            state.accounts = [];
            return state;
        },
        [fetchAllAccounts.pending]: (state) => {
            state.status = 'loading';
            return state;
        }
    }
})

export const {  addAccount, removeAccount } = accountSlice.actions;

export default accountSlice.reducer