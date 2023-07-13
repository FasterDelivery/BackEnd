import { User } from "../models";
import { generateToken } from "../config/token";
import { IPayload } from "../interfaces/IPayload";
import { IUser } from "../interfaces/IUser";

export async function createUser(userData: IUser) {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error: any) {
    throw new Error("Failed to create user");
  }
}

export async function authenticateUser(email: string, password: string) {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isValid = await user.validatePassword(password);
    if (!isValid) {
      throw new Error("Unauthorized");
    }

    const payload: IPayload = {
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin
    };

    const token = generateToken(payload);

    return { token, user };
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function updateUser(userId: string, userData: IUser) {
  try {
    const [_, [editedUser]] = await User.update(userData, {
      where: { id: userId },
      returning: true,
      individualHooks: true
    });
    console.log(_);
    if (!editedUser) {
      throw new Error("Invalid credentials");
    }
    return editedUser;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function deleteOneUser(userId: string) {
  try {
    const deletedUser = await User.destroy({
      where: { id: userId }
    });

    if (!deletedUser) {
      throw new Error("Invalid credentials");
    }

    return "User deleted";
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function getAllUsers() {
  try {
    const allUsers = await User.findAll({
      where: { isAdmin: false }
    });

    if (!allUsers || allUsers.length === 0) {
      throw new Error("No users found");
    }

    return allUsers;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function getAllActiveUsers() {
  try {
    const allActiveUsers = await User.findAll({
      where: { isAdmin: false, status: "active" }
    });

    if (!allActiveUsers) {
      throw new Error("Active users not found");
    }

    return allActiveUsers;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}
