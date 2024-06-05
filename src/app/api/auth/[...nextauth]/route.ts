import { GithunAuthOptions } from "@/app/lib/auth"
import NextAuth from "next-auth"

const handler = NextAuth(GithunAuthOptions)

export { handler as GET, handler as POST }