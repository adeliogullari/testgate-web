import * as React from "react";
import {EmailInput} from "@/app/register/components/input/email";
import {PasswordInput} from "@/app/register/components/input/password";
import {RegisterButton} from "@/app/register/components/button/register";
import {GoogleButton} from "@/app/register/components/button/google";
import {GithubButton} from "@/app/register/components/button/github";
import {Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription} from "@/components/ui/card"
import {FirstnameInput} from "@/app/register/components/input/firstname";
import {LastnameInput} from "@/app/register/components/input/lastname";
import {UsernameInput} from "@/app/register/components/input/username";
import {SignUpButton} from "@/app/register/components/button/signup";

export default function Register() {
    return (
        <main className="flex h-screen justify-center items-center">
            <Card className="bg-white rounded-3xl shadow-md p-5 w-96">
                <CardHeader className="flex items-center">
                    <CardTitle className="text-2xl">Register</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-5">
                    <div className="grid grid-cols-2 gap-2">
                        <FirstnameInput/>
                        <LastnameInput/>
                    </div>
                    <UsernameInput/>
                    <EmailInput/>
                    <PasswordInput/>
                    <RegisterButton/>
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
                        <CardDescription className="flex items-center">
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