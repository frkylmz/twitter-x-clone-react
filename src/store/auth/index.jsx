import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    userName: "frkylmz420",
    fullName: "Faruk Yılmaz",
    avatar:
      "https://pbs.twimg.com/profile_images/1662936940692357121/lnVQG0Kq_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      userName: "frkylmz420",
      fullName: "Faruk Yılmaz",
      avatar:
        "https://pbs.twimg.com/profile_images/1662936940692357121/lnVQG0Kq_400x400.jpg",
    },
    {
      id: 2,
      userName: "farukyilmaz",
      fullName: "Faruk Yılmaz",
      avatar:
        "https://pbs.twimg.com/profile_images/1719705512688721920/gwF8Na2E_400x400.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state manipulation methods
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccounts: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id != action.payload
      );
      if (state.currentAccount && action.payload == state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
