import { createSlice } from "@reduxjs/toolkit";
import {dialogs} from "../../constants/contentBase";

const dialogsSlice = createSlice({
    name: "dialogs",
    initialState: {...dialogs},
    reducers: {

    },
});

export const {} = dialogsSlice.actions;
export default dialogsSlice.reducer;
