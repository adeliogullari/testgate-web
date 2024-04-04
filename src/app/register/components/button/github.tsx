"use client"

import * as React from "react"

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"

interface GithubButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isLoading?: boolean
}

export function GithubButton({ className, ...props }: GithubButtonProps) {

    return (
        <Button
            id="github"
            variant="outline"
            type="button"
            disabled={props.isLoading}>
            {props.isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <Icons.gitHub className="mr-2 h-4 w-4" />
            )}
            GitHub
        </Button>
    )
}