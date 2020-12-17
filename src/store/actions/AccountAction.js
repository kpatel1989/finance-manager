import AccountEffect from "../effects/AccountEffect";

export default class AccountAction {
    static ADD_ACCOUNT = 'accounts/addAccount';

    static addAccount(acc) {
        console.log(acc);
        return async (dispatch, getState) => {
            const account = await AccountEffect.saveAccount(acc);
            dispatch({
                type: this.ADD_ACCOUNT,
                payload: account
            })
        }
    }
}