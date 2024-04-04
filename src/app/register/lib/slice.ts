import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface RegisterRequestBody {
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    password: string,
    confirm_password: string
}

export const register = createAsyncThunk(
    'register',
    async(registerRequestBody: RegisterRequestBody, thunkAPI) => {
        const response = await fetch('https://dummyjson.com/auth/register', {
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
    confirmPassword: string
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error?: string
}

const RegisterInitialState = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
        updateConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
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
            state.error = "action.payload.message";
        })
    }
})

export const {updateFirstname, updateLastname, updateUsername, updateEmail, updatePassword,updateConfirmPassword} = registerSlice.actions

export default registerSlice.reducer