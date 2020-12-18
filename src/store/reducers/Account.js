import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AccountEffect from '../effects/AccountEffect';

const initialState = {
    accounts: [],
    status: 'idle',
    error: null
}
export const selectAllAccounts = state => state.accounts.accounts;
export const saveAccount = createAsyncThunk('accounts/saveAccount', AccountEffect.saveAccount)

export const accountSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        addAccount: (state, action) => {
            const account = action.payload;
            let acc = {
                accountId: account.id,
                accountName: account.accountName,
                accountType: account.accountType,
                bankName: account.bankName,
                currentAmount: account.currentAmount,
                accountNumber: account.accountNumber
            }
            console.log(account);
            state.push(acc);
        },
        removeAccount: (state, id) => {
            if (state.indexOf(id) !== -1) {
                state.splice(state.indexOf(id),1);
            }
        }
    },
    extraReducers: {
        [saveAccount.fulfilled]: (state, action) => {
            state.status = 'success';
            state.error = '';
            state.accounts.push(action.payload);
        },
        [saveAccount.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
            state.accounts = [];
        },
        [saveAccount.pending]: (state, action) => {
            state.status = 'loading';
        }
    }
})

// export const {  } = accountSlice.actions;

export default accountSlice.reducer