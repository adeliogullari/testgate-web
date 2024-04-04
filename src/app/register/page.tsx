import * as React from "react";
import {EmailInput} from "@/app/login/components/input/email";
import {PasswordInput} from "@/app/login/components/input/password";
import {LoginButton} from "@/app/register/components/button/login";
import {RememberMeCheckbox} from "@/app/login/components/checkbox/remember-me"
import {ForgotPasswordButton} from "@/app/login/components/button/forgot-password";
import {GoogleButton} from "@/app/login/components/button/google";
import {GithubButton} from "@/app/login/components/button/github";
import {Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription} from "@/components/ui/card"
import {FirstnameInput} from "@/app/register/components/input/firstname";
import {LastnameInput} from "@/app/register/components/input/lastname";
import {ConfirmPasswordInput} from "@/app/register/components/input/confirm-password";
import {UsernameInput} from "@/app/register/components/input/username";

export default function SignUp() {
    return (
        <main className="flex h-screen justify-center items-center">
            <Card>
                <CardHeader className="flex items-center">
                    <CardTitle className="text-2xl">Register</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-5">
                    <div className="grid grid-cols-2 gap-2">
                        <FirstnameInput/>
                        <LastnameInput/>
                    </div>
                    <UsernameInput/>
                    <EmailInput/>
                    <PasswordInput/>
                    <ConfirmPasswordInput/>
                    <LoginButton/>
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
                <CardFooter>
                    <CardDescription>
                        Dont have an account? Sign up
                    </CardDescription>
                </CardFooter>
            </Card>
        </main>
    )
}