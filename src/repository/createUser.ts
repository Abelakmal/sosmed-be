import { prisma } from '../helpers/prisma';
import { IUser } from '../type/user.type';

export const createUser = async (body: IUser) => {
  try {
    const data = {
        username: body.username,
        email: body.username,
        password: body.password
       };

    const user = await prisma.users.create({
      data
    });
    return user;
  } catch (error) {
    console.log(error);
    
    throw error;
  }
};
