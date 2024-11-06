import {createSlice} from "@reduxjs/toolkit";
import {profile} from "../../constants/contentBase";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        ...profile,
    },
    reducers: {
        addPost(state, action) {
            const text = action.payload;
            const date = +new Date()
            const newPost = {id: `${state.posts.length}-${date}`, message: text, likes: 0}
            state.posts.push(newPost);
        },
        deletePost(state, action) {
            const messageId = action.payload;
            state.posts = [...state.posts.filter((item) => item.id !== messageId)];
        },
    },
});

export const {
    addPost,
    deletePost
} = profileSlice.actions;
export default profileSlice.reducer;
