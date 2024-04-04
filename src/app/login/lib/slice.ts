import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface LoginRequestBody {
    email?: string,
    password?: string,
}

export const login = createAsyncThunk(
    'login',
    async(loginRequestBody: LoginRequestBody, thunkAPI) => {
        const response = await fetch('http://localhost:8000/api/v1/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(loginRequestBody)
        })
        if (response.status === 200) {
            return thunkAPI.fulfillWithValue((await response.json()))
        }
        return thunkAPI.rejectWithValue((await response.json()))
    }
)

export interface LoginState {
    email?: string,
    password?: string,
    accessToken?: string,
    refreshToken?: string,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error?: string
}

const LoginInitialState = {
    email: undefined,
    password: undefined,
    accessToken: undefined,
    refreshToken: undefined,
    loading: 'idle',
    error: undefined,
} as LoginState

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: LoginInitialState,
    reducers: {
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updatePassword: (state, action) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.loading = 'pending';
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = 'failed';
        })
    }
})

export const {updateEmail, updatePassword} = loginSlice.actions

export default loginSlice.reducer