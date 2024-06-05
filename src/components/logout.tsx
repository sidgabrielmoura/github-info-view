'use client'
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

export function LogoutButton(){

    function handleClick(){
        signOut()
    }

    return(
        <>
            <Button onClick={handleClick}>SignOut</Button>
        </>
    )
}