"use client"

import * as React from "react"

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {login, LoginRequestBody} from "@/app/login/lib/slice";

interface LoginButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

export function LoginButton({ className, ...props }: LoginButtonProps) {
    const email = useAppSelector((state) => state.loginReducer.email)
    const password = useAppSelector((state) => state.loginReducer.password)
    const token = useAppSelector((state) => state.loginReducer.token)
    const loginRequestBody: LoginRequestBody = {email: email, password: password}
    const dispatch = useAppDispatch()

    return (
        <>
            {token}
        <Button id="login" variant="outline" disabled={props.isLoading} onClick={() => {dispatch(login(loginRequestBody))}}>
            {props.isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Register
        </Button>
        </>

    )
}