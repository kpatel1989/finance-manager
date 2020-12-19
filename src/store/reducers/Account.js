import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AccountEffect from '../effects/AccountEffect';

export const initialAccountState = {
    accounts: [],
    status: 'idle',
    error: null
}
// selectors
export const selectAllAccounts = state => state.accounts.accounts;

// thunk actions
export const saveAccount = createAsyncThunk('accounts/saveAccount', AccountEffect.saveAccount)

export const accountSlice = createSlice({
    name: 'accounts',
    initialAccountState,
    reducers: {
        addAccount: (state, action) => {
            const account = action.payload;
            let acc = {
                id: account.id,
                accountName: account.accountName,
                accountType: account.accountType,
                bankName: account.bankName,
                currentAmount: account.currentAmount,
                accountNumber: account.accountNumber
            }
            state.accounts.push(acc);
            return state;
        },
        removeAccount: (state, action) => {
            const id = action.payload.id;
            console.log(action.payload);
            const ac =  state.accounts.find(a => {
                console.log(a.id, id, a.id === id);
                return a.id === id
            });
            if (ac) {
                state.accounts.splice(state.accounts.indexOf(ac),1);
            }
            return state;
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