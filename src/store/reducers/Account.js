import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: 'accounts',
    initialState: [],
    reducers: {
        addAccount: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
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
    }
})

export const { addAccount, removeAccount } = accountSlice.actions

export default accountSlice.reducer