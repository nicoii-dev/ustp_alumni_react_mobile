/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  comment: {
    id: null,
    text: '',
  }
};

const CommentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComment: (state, action) => {
      return {
        ...state,
        comment: action.payload,
      };
    },
  },
});
export const {setComment} = CommentSlice.actions;
export default CommentSlice.reducer;
