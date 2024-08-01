"use client"

import * as React from "react"
import {Input} from "@/components/ui/input"
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { updatePassword } from "@/app/login/lib/slice";
import {KeyboardEventHandler} from "react";

interface PasswordInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly onChange?:  React.ChangeEventHandler<HTMLInputElement> | undefined
    readonly onKeyUp?: KeyboardEventHandler<HTMLInputElement> | undefined
    readonly disabled?: boolean | undefined
    readonly value?: string | number | readonly string[] | undefined
}

interface State {
    password?: string
}

export function PasswordInput({ className, ...props }: PasswordInputProps) {
    const password = useAppSelector((state) => state.loginReducer.password)
    const loading = useAppSelector((state) => state.loginReducer.loading)
    const dispatch = useAppDispatch()

    const [values, setValues] = React.useState<State>({
        password: '',
    });

    // const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValues({ ...values, [prop]: event.target.value });
    //     dispatch(updatePassword(event.target.value))
    // };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updatePassword(event.target.value))
    }

    return (
        <Input
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onKeyUp={props.onKeyUp}
            onChange={props.onChange}
            disabled={props.disabled}
        />
    )
}