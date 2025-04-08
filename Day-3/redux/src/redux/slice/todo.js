import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, actions) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.data = actions.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, actions) => {
      console.log("Error", actions.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;
