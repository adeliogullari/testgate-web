"use client"

import * as React from "react"

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {login, LoginRequestBody} from "@/app/login/lib/slice";
import Cookies from "js-cookie";
import {useToast} from "@/components/ui/use-toast";
import {ToastAction} from "@/components/ui/toast";
import {useEffect, useRef} from "react";
import {redirect} from "next/navigation";

interface LoginButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

export function LoginButton({ className, ...props }: LoginButtonProps) {
    const email = useAppSelector((state) => state.loginReducer.email)
    const password = useAppSelector((state) => state.loginReducer.password)
    const accessToken = useAppSelector((state) => state.loginReducer.accessToken)
    const refreshToken = useAppSelector((state) => state.loginReducer.refreshToken)
    const loading = useAppSelector((state) => state.loginReducer.loading)
    const error = useAppSelector(state => state.loginReducer.error)
    const loginRequestBody: LoginRequestBody = {email: email, password: password}
    const dispatch = useAppDispatch()
    const disabled = (email == undefined || email == '') || (password == undefined || password == '')

    const { toast } = useToast()
    const buttonRef = useRef(null);

    useEffect(() => {
        if (loading === 'failed') {
            toast({
                variant: "destructive",
                title: error,
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
        if (loading === "succeeded") {
            redirect('/forms')
        }
    }, [loading, error, toast]);

    const handleLogin = async () => {
        await dispatch(login(loginRequestBody))
    }

    const handleKeyPress = async (event: { key: string; }) => {
        if (event.key === 'Enter') {
            await dispatch(login(loginRequestBody))
        }
    };

    return (
        <Button id="login" variant="outline" disabled={disabled} onKeyUp={handleKeyPress} onClick={() => handleLogin()}>
            {(loading == "pending") && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Log In
        </Button>

    )
}