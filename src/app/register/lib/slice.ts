import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {LoginRequestBody} from "@/app/login/lib/slice";

export interface RegisterRequestBody {
    firstname?: string,
    lastname?: string,
    username?: string,
    email?: string,
    password?: string,
}

export interface ErrorResponse {
    detail: string;
}

export const register = createAsyncThunk<
    { firstname: string; lastname: string, username: string, email: string },
    LoginRequestBody,
    {
        rejectValue: ErrorResponse
    }
>(
    'register',
    async(registerRequestBody: RegisterRequestBody, thunkAPI) => {
        const response = await fetch('http://localhost:8000/api/v1/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(registerRequestBody)
        })
        if (response.status === 200) {
            return thunkAPI.fulfillWithValue((await response.json()))
        }
        return thunkAPI.rejectWithValue((await response.json()))
    }
)

export interface RegisterState {
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    password: string,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error?: string
}

const RegisterInitialState = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    loading: 'idle',
    error: undefined,
} as RegisterState

export const registerSlice = createSlice({
    name: 'registerSlice',
    initialState: RegisterInitialState,
    reducers: {
        updateFirstname: (state, action) => {
            state.firstname = action.payload;
        },
        updateLastname: (state, action) => {
            state.lastname = action.payload;
        },
        updateUsername: (state, action) => {
            state.username = action.payload;
        },
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updatePassword: (state, action) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state, action) => {
            state.loading = 'pending';
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = 'succeeded';
        })
        builder.addCase(register.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.payload?.detail;
        })
    }
})

export const {updateFirstname, updateLastname, updateUsername, updateEmail, updatePassword} = registerSlice.actions

export default registerSlice.reducer