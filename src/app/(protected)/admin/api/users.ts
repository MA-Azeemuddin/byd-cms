// app/actions/user-data/action.ts

import { prisma } from "@/app/utils/prisma";

export async function getUserWithProjects(userId: string) {
  const userData = await prisma.user.findMany({
    where: { id: userId },
    select: {
      name: true,
      email: true,
      mobile: true,
      address: true,
      project: {
        select: {
          name: true,
          status: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!userData) {
    throw new Error("User not found");
  }

  return userData;
}

// Type definition for better type safety
export type UserWithProjects = Awaited<ReturnType<typeof getUserWithProjects>>;
