"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

interface SignUpProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignUpButton({ className, ...props }: SignUpProps) {

    return (
        <Button variant="link">
            Register
        </Button>
    )
}