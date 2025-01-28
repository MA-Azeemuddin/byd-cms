import { DefaultSession } from "next-auth";

// Extend the `user` object returned in the session
declare module "next-auth" {
  interface Session {
    user: {
      address: string?;
      role: string?;
    } & DefaultSession["user"];
  }
}
