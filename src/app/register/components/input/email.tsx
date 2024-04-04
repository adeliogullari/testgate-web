"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { updateEmail } from "@/app/login/lib/slice";

interface EmailInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

interface State {
    email?: string
}

export function EmailInput({ className, ...props }: EmailInputProps) {
    const email = useAppSelector((state) => state.loginReducer.email)
    const dispatch = useAppDispatch()

    const [values, setValues] = React.useState<State>({
        email: '',
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        dispatch(updateEmail(event.target.value))
    };

    return (
        <>
            {email}
            <Input
                id="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={handleChange('email')}
                disabled={props.isLoading}/></>
    )
}