"use client"

import * as React from "react"

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"

interface GoogleButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

export function GoogleButton({ className, ...props }: GoogleButtonProps) {

    return (
        <Button
            id="google"
            variant="outline"
            type="button"
            disabled={props.isLoading}>
            {props.isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <Icons.google className="mr-2 h-4 w-4" />
            )}
            Google
        </Button>
    )
}