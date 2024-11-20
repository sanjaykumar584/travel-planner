import { configureStore, createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    setLoginData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { setLoginData } = loginSlice.actions;

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export default store;
