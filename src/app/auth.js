import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import UserModel from "./utils/models/User";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",

      async authorize(credentials) {
        const user = await UserModel.findOne({ email: credentials?.email });
        if (!user) {
          return null;
        }
        if (credentials?.password !== user.password) {
          return null;
        }
        return { name: user.username, email: user.email, role: user.role };
      },
    }),
  ],
  secret: process.env.SECRET_KEY,
});
