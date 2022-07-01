import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UsersState } from './types';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://dummyjson.com/users');
  const responseAsJSON = await response.json();

  return responseAsJSON.users;
});

const initialState: UsersState = {
  users: [],
  state: 'loading',
};

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users = [action.payload, ...state.users];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { addNewUser } = userSlice.actions;

export default userSlice.reducer;
