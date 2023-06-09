import {configureStore} from '@reduxjs/toolkit';

import productSlice from './productSlice.js';

export const store = configureStore({
    reducer:{
        products:productSlice
    },
});