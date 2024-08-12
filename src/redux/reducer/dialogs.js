import { createSlice } from "@reduxjs/toolkit";
import {dialogs} from "../../constants/contentBase";

const dialogsSlice = createSlice({
    name: "dialogs",
    initialState: {
        ...dialogs,
        activeDialog: null
    },
    reducers: {
        selectDialog(state, action) {
            state.activeDialog = action.payload;
        }
    },
});

export const {selectDialog} = dialogsSlice.actions;
export default dialogsSlice.reducer;
