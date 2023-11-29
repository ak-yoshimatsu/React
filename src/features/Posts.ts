import { createSlice } from '@reduxjs/toolkit';
import { PostsData } from '../DummyData';

// Slice
export const postSlice = createSlice({
  name: 'posts',
  // State
  initialState: { value: PostsData },
  // Reducer
  reducers: {
    // Action Creator(Redux Toolkitが同名で自動的に作成)
    addPost: (state, action) => {
      state.value.push(action.payload); // payload => データ
    },
    deletePost: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
