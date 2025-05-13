import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  token: z.string(),
});
export const userResolver = zodResolver(userSchema);
export type User = z.infer<typeof userSchema>;

const loginFormSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email." }),
  password: z.string().trim().nonempty({ message: "Password is required." }),
});
export const loginFormResolver = zodResolver(loginFormSchema);
export type LoginFormData = z.infer<typeof loginFormSchema>;

const editProfileFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be minimum 2 characters long.")
    .nonempty({ message: "Name is required." }),
});
export const editProfileFormResolver = zodResolver(editProfileFormSchema);
export type EditProfileFormData = z.infer<typeof editProfileFormSchema>;

const registerFormSchema = editProfileFormSchema
  .extend({
    email: z.string().trim().email({ message: "Invalid email." }),
    password: z
      .string()
      .trim()
      .nonempty({ message: "Password is required." })
      .min(6, "Password must be minimum 6 characters long."),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password do not match.",
        path: ["confirmPassword"],
      });
    }
  });
export const registerFormResolver = zodResolver(registerFormSchema);
export type RegisterFormData = z.infer<typeof registerFormSchema>;

const changePasswordFormSchema = z
  .object({
    currentPassword: z
      .string()
      .trim()
      .nonempty({ message: "Current password is required." }),
    newPassword: z
      .string()
      .trim()
      .nonempty({ message: "New password is required." })
      .min(6, "Password must be minimum 6 characters long."),
    confirmPassword: z.string(),
  })
  .superRefine(({ newPassword, confirmPassword }, ctx) => {
    if (newPassword !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password do not match.",
        path: ["confirmPassword"],
      });
    }
  });
export const changePasswordFormResolver = zodResolver(changePasswordFormSchema);
export type ChangePasswordFormData = z.infer<typeof changePasswordFormSchema>;
