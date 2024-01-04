import { createUser } from '../../repository/createUser';
import { IUser } from '../../type/user.type';

export const registerAction = async(body: IUser) => {
  const create = await createUser(body);
  try {
    return {
      status: 200,
      create
    };
  } catch (error) {
    throw error;
  }
};
