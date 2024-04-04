"use client"

import * as React from "react"

import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/ui/icons";

interface EmailInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

export function EmailInput({ className, ...props }: EmailInputProps) {
return (
    <Input
        id="email"
        placeholder="Email"
        type="email"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
        disabled={props.isLoading}
    />
    )
}

// 'use client'
// import * as React from 'react';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import {useSelector} from "react-redux";
// import {updateEmail} from "../sign-in.slice";
//
// interface State {
//     email: string;
// }
//
// export default function SignInEmailTextFieldComponent() {
//
//     const [values, setValues] = React.useState<State>({
//         email: '',
//     });
//
//     const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValues({ ...values, [prop]: event.target.value });
//         updateEmail('deneme')
//     };
//
//     return (
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//             <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
//             <OutlinedInput
//                 id="outlined-adornment-password"
//                 value={values.email}
//                 onChange={handleChange('email')}
//                 label="Email"
//             />
//         </FormControl>
//     )
// }
