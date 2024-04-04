"use client"

import * as React from "react"
import {Input} from "@/components/ui/input"
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { updateEmail, updatePassword } from "@/app/login/lib/slice";

interface ConfirmPasswordInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

interface State {
    confirmPassword?: string
}

interface ConfirmPasswordInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

export function ConfirmPasswordInput({ className, ...props }: ConfirmPasswordInputProps) {
    const confirmPassword = useAppSelector((state) => state.loginReducer.password)
    const dispatch = useAppDispatch()

    const [values, setValues] = React.useState<State>({
        confirmPassword: '',
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        dispatch(updatePassword(event.target.value))
    };
    return (
        <>
            {confirmPassword}
            <Input
                id="confirm-password"
                placeholder="Confirm Password"
                type="confirm-password"
                value={confirmPassword}
                onChange={handleChange('confirmPassword')}
                disabled={props.isLoading}
            /></>
    )
}