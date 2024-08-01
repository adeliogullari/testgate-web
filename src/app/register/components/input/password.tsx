"use client"

import * as React from "react"
import {Input} from "@/components/ui/input"
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { updatePassword } from "@/app/register/lib/slice";

interface PasswordInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

interface State {
    password?: string
}

interface PasswordInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

export function PasswordInput({ className, ...props }: PasswordInputProps) {
    const password = useAppSelector((state) => state.registerReducer.password)
    const dispatch = useAppDispatch()

    const [values, setValues] = React.useState<State>({
        password: '',
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        dispatch(updatePassword(event.target.value))
    };
    return (
        <Input
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handleChange('password')}
            disabled={props.isLoading}
        />
    )
}