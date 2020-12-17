import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './reducers/Account';

export default configureStore({
  reducer: {
      accounts: accountReducer
  },
});
