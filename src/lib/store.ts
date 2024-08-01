import { configureStore } from '@reduxjs/toolkit'
import {loginSlice} from "@/app/login/lib/slice";
import {registerSlice} from "@/app/register/lib/slice";

export const makeStore = () => {
    return configureStore({
        reducer: {'loginReducer': loginSlice.reducer, 'registerReducer': registerSlice.reducer},
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']