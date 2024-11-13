import { createSlice } from "@reduxjs/toolkit";
import {dialogs, users} from "../../constants/contentBase";


const dialogsSlice = createSlice({
    name: "dialogs",
    initialState: {
        list: [...dialogs.list],
        users: users,
        activeDialog: users[0].id
    },
    reducers: {
        selectDialog(state, {payload}) {
            state.activeDialog = payload;
        },
        addMessage(state, {payload}) {
            if(!state?.activeDialog) return;
            const curElement = (el)=> el.id === state.activeDialog;
            const currentMessagesId = state.list.findIndex(curElement);
            state.list[currentMessagesId].messages = [...state.list[currentMessagesId].messages, {id: "me", text: payload}]
        }
    },
});

export const {selectDialog, addMessage} = dialogsSlice.actions;
export default dialogsSlice.reducer;
