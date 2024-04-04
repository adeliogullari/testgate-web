"use client"

import * as React from "react"

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"

interface LoginButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

export function LoginButton({ className, ...props }: LoginButtonProps) {

    return (
        <Button variant="outline" id="login" disabled={props.isLoading}>
            {props.isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
        </Button>
    )
}