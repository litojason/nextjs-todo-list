"use server";

import { redirect } from "next/navigation";

import client, { ClientError } from "@/lib/client";
import { deleteToken } from "@/lib/cookies";
import {
  ChangePasswordFormData,
  EditProfileFormData,
  User,
} from "@/models/user";

type GetProfileResponse = {
  message: string;
  user: User;
};
export const getProfile = async () => {
  try {
    const response = await client.get<GetProfileResponse>("/users/profile");

    return response.user;
  } catch (error) {
    logout();
    throw (error as ClientError).message;
  }
};

export const editProfile = async (data: EditProfileFormData) => {
  try {
    const response = await client.put<EditProfileFormData, GetProfileResponse>(
      "/users/profile",
      data
    );

    return response;
  } catch (error) {
    throw (error as ClientError).message;
  }
};

export const changePassword = async (data: ChangePasswordFormData) => {
  try {
    const response = await client.put<
      ChangePasswordFormData,
      GetProfileResponse
    >("/users/profile/password", data);

    return response;
  } catch (error) {
    throw (error as ClientError).message;
  }
};

export const logout = async () => {
  await deleteToken();
  redirect("/login");
};
