import GoogleProvider from "next-auth/providers/google";
import nextAuth from "next-auth";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.SECRET_ID
}

export default nextAuth(authOptions)