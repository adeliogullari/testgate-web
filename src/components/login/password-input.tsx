"use client"

import * as React from "react"

import {Input} from "@/components/ui/input"

interface PasswordInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

export function PasswordInput({ className, ...props }: PasswordInputProps) {
    return (
        <Input
            id="password"
            placeholder="Password"
            type="password"
            autoCapitalize="none"
            autoComplete="current-password"
            autoCorrect="off"
            disabled={props.isLoading}
        />
    )
}
