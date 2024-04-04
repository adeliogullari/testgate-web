"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { updateEmail } from "@/app/login/lib/slice";

interface EmailInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

interface EmailState {
    email?: string
}

export function EmailInput({ className, ...props }: EmailInputProps) {
    const email = useAppSelector((state) => state.loginReducer.email)
    const loading = useAppSelector((state) => state.loginReducer.loading)
    const dispatch = useAppDispatch()

    const [values, setValues] = React.useState<EmailState>({
        email: undefined,
    });

    const handleChange = (prop: keyof EmailState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        dispatch(updateEmail(event.target.value))
    };

    return (
        <Input
            id="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleChange('email')}
            disabled={(loading == "pending")}
        />
    )
}