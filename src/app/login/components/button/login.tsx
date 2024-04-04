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
    const accessToken = useAppSelector((state) => state.loginReducer.accessToken)
    const refreshToken = useAppSelector((state) => state.loginReducer.refreshToken)
    const loading = useAppSelector((state) => state.loginReducer.loading)
    const loginRequestBody: LoginRequestBody = {email: email, password: password}
    const dispatch = useAppDispatch()
    const disabled = (email == undefined || email == '') || (password == undefined || password == '')

    return (
        <Button id="login" variant="outline" disabled={disabled} onClick={() => {dispatch(login(loginRequestBody))}}>
            {(loading == "pending") && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Log In
        </Button>

    )
}