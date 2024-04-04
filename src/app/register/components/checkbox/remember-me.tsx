"use client"

import * as React from "react"
import {Checkbox} from "@/components/ui/checkbox";

interface EmailInputProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

export function RememberMeCheckbox({ className, ...props }: EmailInputProps) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="remember-me"/>
            <label
                htmlFor="remember-me"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Remember me
            </label>
        </div>
    )
}