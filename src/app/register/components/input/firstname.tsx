"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { updateFirstname } from "@/app/register/lib/slice";

interface FirstnameInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

interface State {
    firstname?: string
}

export function FirstnameInput({ className, ...props }: FirstnameInputProps) {
    const firstname = useAppSelector((state) => state.registerReducer.firstname)
    const dispatch = useAppDispatch()

    const [values, setValues] = React.useState<State>({
        firstname: '',
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        dispatch(updateFirstname(event.target.value))
    };

    return (
        <Input
            id="firstname"
            placeholder="Firstname"
            type="firstname"
            value={firstname}
            onChange={handleChange('firstname')}
            disabled={props.isLoading}/>
    )
}