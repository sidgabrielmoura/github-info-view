/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { GithunAuthOptions } from "../lib/auth"
import { LogoutButton } from "@/components/logout"
import { JSX, SVGProps } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/olYTHE1Jxdx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default async function Logado() {

    const session = await getServerSession(GithunAuthOptions)

    if(!session) {
        redirect('/')
    }

    const user = session.user

    const totalRepos = user.githubProfile.public_repos + (user.githubProfile.total_private_repos ?? 0)

    const totalGists = user.githubProfile.public_gists + (user.githubProfile.private_gists ?? 0)

    console.log(session)

    return (
      <div className="flex flex-col h-screen ">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-4 relative min-h-[400px] max-h-[550px] my-auto">
            <div className="flex items-center space-x-4">
              <div className="flex gap-2 items-center">
                <img src={user?.image ?? ''} alt="Imagem avatar" width={80} height={80} className="rounded-full"/>
                <div>
                    <h2 className="text-lg font-bold">{user?.name}</h2>
                    <div className="text-gray-500">
                      <span>
                        {user.githubProfile.followers} Followers</span> &middot; <span>{user.githubProfile.following} Following
                      </span>
                    </div>
                </div>
              </div>
            </div>
            <span className="text-[18px] font-semibold">
              {user.githubProfile.bio}
            </span>
            <div className="w-full flex flex-col mt-[130px]">
              <LogoutButton/>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 lg:grid-cols-2 grid-cols-1 col-span-2 grid row-auto gap-3 ">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Total Repositories</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-2 py-8">
                <span className="text-4xl font-bold">{totalRepos}</span>
                <span className="text-gray-500 dark:text-gray-400">Repositories</span>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <CardTitle>Privates Repositories</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-2 py-8">
                <span className="text-4xl font-bold">{user.githubProfile.total_private_repos}</span>
                <span className="text-gray-500 dark:text-gray-400">Repositories</span>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <CardTitle>Publics Repositories</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-2 py-8">
                <span className="text-4xl font-bold">{user.githubProfile.public_repos}</span>
                <span className="text-gray-500 dark:text-gray-400">Repositories</span>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <CardTitle>Total Gists</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-2 py-8">
                <span className="text-4xl font-bold">{totalGists}</span>
                <span className="text-gray-500 dark:text-gray-400">Gists</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }
  
  function BugIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 2 1.88 1.88" />
        <path d="M14.12 3.88 16 2" />
        <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
        <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
        <path d="M12 20v-9" />
        <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
        <path d="M6 13H2" />
        <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
        <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
        <path d="M22 13h-4" />
        <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
      </svg>
    )
  }
  
  
  function GitCommitVerticalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v6" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 15v6" />
      </svg>
    )
  }
  
  
  function GitPullRequestIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" x2="6" y1="9" y2="21" />
      </svg>
    )
  }
  
  
  function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }