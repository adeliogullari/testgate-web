"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { updateUsername } from "@/app/register/lib/slice";

interface UsernameInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

interface State {
    username?: string
}

export function UsernameInput({ className, ...props }: UsernameInputProps) {
    const username = useAppSelector((state) => state.registerReducer.username)
    const dispatch = useAppDispatch()

    const [values, setValues] = React.useState<State>({
        username: '',
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        dispatch(updateUsername(event.target.value))
    };

    return (
            <Input
                id="username"
                placeholder="Username"
                type="username"
                value={username}
                onChange={handleChange('username')}
                disabled={props.isLoading}/>
    )
}