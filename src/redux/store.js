import { configureStore } from "@reduxjs/toolkit";
import profileSlice from './reducer/profile';
import dialogsSlice from './reducer/dialogs';

export const store = configureStore({
    reducer: {
        profile: profileSlice,
        dialogs: dialogsSlice,
    },
});
