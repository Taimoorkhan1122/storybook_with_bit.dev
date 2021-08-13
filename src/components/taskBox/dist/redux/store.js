import { configureStore } from '@reduxjs/toolkit';

import taskStateReducer from '../taskSlice';

export const store = configureStore({

    reducer: {

        tasksList: taskStateReducer,

    },

});

