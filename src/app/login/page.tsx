"use client"

import * as React from "react";
import {EmailInput} from "@/app/login/components/input/email";
import {PasswordInput} from "@/app/login/components/input/password";
import {LoginButton} from "@/app/login/components/button/login";
import {ForgotPasswordButton} from "@/app/login/components/button/forgot-password";
import {GoogleButton} from "@/app/login/components/button/google";
import {GithubButton} from "@/app/login/components/button/github";
import {Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription} from "@/components/ui/card"
import {SignUpButton} from "@/app/login/components/button/signup";
import {RememberMeCheckbox} from "@/app/login/components/checkbox/remember-me";
import {login, LoginRequestBody, updatePassword} from "@/app/login/lib/slice";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";

export default function Login() {

    const email = useAppSelector((state) => state.loginReducer.email)
    const password = useAppSelector((state) => state.loginReducer.password)
    const loading = useAppSelector((state) => state.loginReducer.loading)
    const disabled = loading == "pending";
    const loginRequestBody: LoginRequestBody = {email: email, password: password}

    const dispatch = useAppDispatch()
    const onPasswordChange = async (event: React.ChangeEvent<HTMLInputElement>) => {dispatch(updatePassword(event.target.value))}
    const onPasswordKeyUp = async (event: React.KeyboardEvent<HTMLInputElement>) => {if (event.key === 'Enter') {
        await dispatch(login(loginRequestBody))
    }}

    return (
            <main className="flex h-screen justify-center items-center">
                <Card className="bg-white rounded-3xl shadow-md p-5 w-96">
                    <CardHeader className="flex items-center">
                        <CardTitle className="text-2xl">Login</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 gap-5">
                        <EmailInput/>
                        <PasswordInput disabled={disabled} onChange={onPasswordChange} onKeyUp={onPasswordKeyUp}/>
                        <LoginButton/>
                        <div className="grid grid-cols-2">
                            <RememberMeCheckbox className="justify-self-start"/>
                            <div className="flex items-center">
                            <ForgotPasswordButton className="justify-self-end"/>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t"/>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-5 text-muted-foreground">
                                    OR
                                </span>
                            </div>
                        </div>
                        <GoogleButton/>
                        <GithubButton/>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start">
                        <CardContent className="grid">
                        <CardDescription className="flex flex-row justify-center items-center">
                            <div className="text-muted-foreground">
                                {"Don't have an account"}
                            </div>
                            <SignUpButton/>
                        </CardDescription>
                        </CardContent>
                    </CardFooter>
                </Card>
            </main>
    )
}
