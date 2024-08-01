"use client"

import * as React from "react"

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface GoogleButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

export function RememberMeCheckbox({ className, ...props }: GoogleButtonProps) {

    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms"/>
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Remember me
            </label>
        </div>

    )
}