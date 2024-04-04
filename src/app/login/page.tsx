import * as React from "react";
import {EmailInput} from "@/app/login/components/input/email";
import {PasswordInput} from "@/app/login/components/input/password";
import {LoginButton} from "@/app/login/components/button/login";
import {ForgotPasswordButton} from "@/app/login/components/button/forgot-password";
import {GoogleButton} from "@/app/login/components/button/google";
import {GithubButton} from "@/app/login/components/button/github";
import {Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription} from "@/components/ui/card"
import {SignUpButton} from "@/app/login/components/button/signup";

export default function Login() {
    return (
            <main className="flex h-screen justify-center items-center">
                <Card className={"bg-white rounded-3xl shadow-md p-4 w-96"}>
                <CardHeader className="flex items-center">
                    <CardTitle className="text-2xl">Login</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-5">
                        <EmailInput/>
                        <PasswordInput/>
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
                <CardFooter className="flex flex-col items-start">
                    <CardDescription className="flex items-center justify-between w-full">
                        <ForgotPasswordButton className="left-aligned-button" />
                    </CardDescription>
                    <CardDescription className="flex items-center">
                        <div className="text-muted-foreground">
                            {"Don't have an account"}
                        </div>
                        <SignUpButton/>
                    </CardDescription>
                </CardFooter>
                </Card>
            </main>
    )
}
