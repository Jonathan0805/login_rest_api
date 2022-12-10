import {configureStore} from "@reduxjs/toolkit";
import dummyreducer from "./dummyreducer";

const store = configureStore({reducer: dummyreducer})

export default store;
