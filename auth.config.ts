import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import bcrypt from 'bcryptjs';
import google from "next-auth/providers/google";
import github from "next-auth/providers/github";

export default {
    providers: [
      google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),

      github({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
      Credentials({
        async authorize(credentials) {
          const validatedFields = LoginSchema.safeParse(credentials);
  
          if (validatedFields.success) {
            const { email, password } = validatedFields.data;
  
            const user = await getUserByEmail(email);
            if (!user || !user.password) return null;
  
            const passwordsMatch = await bcrypt.compare(password, user.password);
  
            if (passwordsMatch) return user;
          }
  
          return null;
        },
      }),
    ],
  } satisfies NextAuthConfig;