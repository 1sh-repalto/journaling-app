"use client"

import { UserButton, useUser } from "@clerk/nextjs";
import { Spinner } from "./ui/spinner";

export default function UserAccountButton() {
    const { isLoaded } = useUser()

    if(!isLoaded) {
        return (
            <div className="flex items-center">
                <Spinner className="size-4"/>
            </div>
        )
    }

    return (
        <UserButton />
    )
}