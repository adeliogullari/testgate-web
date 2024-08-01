"use client"

import * as React from "react"

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {register, RegisterRequestBody} from "@/app/register/lib/slice";
import {useToast} from "@/components/ui/use-toast";
import {useEffect, useRef} from "react";
import {ToastAction} from "@/components/ui/toast";
import {redirect} from "next/navigation";

interface RegisterButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

export function RegisterButton({ className, ...props }: RegisterButtonProps) {
    const firstname = useAppSelector((state) => state.registerReducer.firstname)
    const lastname = useAppSelector((state) => state.registerReducer.lastname)
    const username = useAppSelector((state) => state.registerReducer.username)
    const email = useAppSelector((state) => state.registerReducer.email)
    const password = useAppSelector((state) => state.registerReducer.password)
    const loading = useAppSelector((state) => state.registerReducer.loading)
    const error = useAppSelector(state => state.registerReducer.error)
    const registerRequestBody: RegisterRequestBody = {firstname: firstname, lastname: lastname, username:username, email: email, password: password}
    const dispatch = useAppDispatch()

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
            redirect('/login')
        }
    }, [loading, error, toast]);

    const handleLogin = async () => {
        await dispatch(register(registerRequestBody))
    }

    return (
        <Button id="register" variant="outline" onClick={() => handleLogin()}>
            {props.isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Register
        </Button>
    )
}