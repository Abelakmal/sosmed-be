import { excludeFields } from '../../helper/excludeFields';
import { findUserByUsername } from '../../repository/users/findUserByUsername';

export const getUserByUsernameAction = async (username: string) => {
  try {
    const data = await findUserByUsername(username);

 
    if (data) {
      return {
        status: 200,
        message: 'user di temukan',
        data: excludeFields(data, ["password","isDeleted","createdAt","updatedAt"])
      };
    }
    return{
        status: 404,
        message: "user is not found"
    }
  } catch (error) {
    throw error;
  }
};
