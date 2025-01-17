import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import {type} from '@testing-library/user-event/dist/type';
import axios from 'axios';
// import {axiosRequest} from '../../Services/axios';
// import {axiosRequest} from '../../../services/axios';

const initialState = {
  loading: false,
  todoListData: [],
  error: '',
};

export const getTodoList = createAsyncThunk(
  'todoList/getTodoList',
  async () => {
    const response = await axios.get(
      // `https://jsonplaceholder.typicode.com/todos`
      // `https://cricket.sportmonks.com/api/v2.0/players`
      `https://66c5a0d4134eb8f43494f3e8.mockapi.io/cpl/auction/teams`
      , 
    );
    console.log(response, 'response');
    return response.data;
  },
);

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTodoList.fulfilled, (state, action) => {
      state.loading = false;
      state.todoListData = action.payload;
      state.error = '';
    });
    builder.addCase(getTodoList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const todoListValue = (state) => state.todoListData;
export default todoListSlice.reducer;
