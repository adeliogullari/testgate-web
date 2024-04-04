"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

interface ForgotPasswordProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ForgotPasswordButton({ className, ...props }: ForgotPasswordProps) {

    return (
        <Button variant="link">
            Forgot Password?
        </Button>
    )
}