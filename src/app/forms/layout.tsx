import { Metadata } from "next"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { SidebarNav} from "@/app/forms/sidebar-nav";

export const metadata: Metadata = {
    title: "Forms",
    description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
    {
        title: "Profile",
        href: "/examples/forms",
    },
    {
        title: "Account",
        href: "/examples/forms/account",
    },
    {
        title: "Appearance",
        href: "/examples/forms/appearance",
    },
    {
        title: "Notifications",
        href: "/examples/forms/notifications",
    },
    {
        title: "Display",
        href: "/examples/forms/display",
    },
]

interface SettingsLayoutProps {
    children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <>{children}
        </>
)
}