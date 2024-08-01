"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { updateLastname } from "@/app/register/lib/slice";

interface LastnameInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

interface State {
    lastname?: string
}

export function LastnameInput({ className, ...props }: LastnameInputProps) {
    const lastname = useAppSelector((state) => state.registerReducer.lastname)
    const dispatch = useAppDispatch()

    const [values, setValues] = React.useState<State>({
        lastname: '',
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        dispatch(updateLastname(event.target.value))
    };

    return (
        <Input
            id="lastname"
            placeholder="Lastname"
            type="lastname"
            value={lastname}
            onChange={handleChange('lastname')}
            disabled={props.isLoading}/>
    )
}