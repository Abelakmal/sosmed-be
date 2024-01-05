import { comparePasswords } from "../../helper/bcrypt";
import { excludeFields } from "../../helper/excludeFields";
import { createToken } from "../../helper/jwt";
import { findUserByEmail } from "../../repository/users/findUserByEmail";
import { findUserByUsername } from "../../repository/users/findUserByUsername";

export const loginAction = async (
  usernameOrEmail: string,
  password: string
) => {
  try {
    let user;
    console.log(usernameOrEmail);
    

    if (usernameOrEmail.includes("@")) {
      user = await findUserByEmail(usernameOrEmail);
    } else {
      user = await findUserByUsername(usernameOrEmail);
    }

    if (!user) {
      return {
        status: 404,
        message: "Account not found",
      };
    }

    if (user.isDeleted) {
      return {
        status: 400,
        message: "Account deleted",
      };
    }

    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
      return {
        status: 400,
        message: "Invalid credentials",
      };
    }

    const token = createToken({ id: user.id });

    return {
      status: 200,
      message: "login success",
      data: excludeFields(user, ["password","isDeleted","createdAt","updatedAt"]),
      token,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
