'use client'
import { Button } from "@/components/ui/button"
import { signIn } from 'next-auth/react'

export const LoginButtonGithub = () => {

    const handleClick = () => {
        signIn('github')
    }

    return(
        <Button type="submit" className="w-full" onClick={handleClick}>
            Entre com o Github
        </Button>
    )
}