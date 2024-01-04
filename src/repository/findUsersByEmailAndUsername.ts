import { prisma } from "../helpers/prisma";


export const findUsersByEmailAndUsername = async (
  email: string,
  username: string
) => {
  try {
    const users = await prisma.users.findMany({
      where: {
        OR: [
          {
            email: {
              equals: email,
            },
          },
          {
            username: {
              equals: username,
            },
          },
        ],
      },
    });

    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
