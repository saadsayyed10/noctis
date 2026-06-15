import prisma from "../../lib/prisma";

export const syncClerkUserService = async (
  id: string,
  name: string,
  email: string,
  profilePicUrl: string,
) => {
  const existing = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  if (existing) throw new Error("User already exists");

  const user = await prisma.users.create({
    data: {
      id,
      name,
      email,
      profilePicUrl,
    },
  });

  return user;
};
