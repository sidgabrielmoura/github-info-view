/* eslint-disable react/no-unescaped-entities */
import { LoginButtonGithub } from "@/components/loginButton"
import { getServerSession } from "next-auth"
import { GithunAuthOptions } from "./lib/auth"
import { redirect } from "next/navigation"

export default async function Login() {

  const session = await getServerSession(GithunAuthOptions)

  if(session) {
    redirect('/logado')
  }

  return (
    <>
      <main className="w-full h-screen flex items-center justify-center">
        <div className="mx-auto max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              vamos ver como está seu github!
            </p>
          </div>
          <LoginButtonGithub/>
        </div>
      </main>
    </>
  )
}
