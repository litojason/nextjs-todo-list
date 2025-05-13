import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { ClientError } from "@/lib/client";
import {
  ChangePasswordFormData,
  changePasswordFormResolver,
} from "@/models/user";
import { changePassword } from "@/actions/user";

export default function useChangePassword() {
  const form = useForm<ChangePasswordFormData>({
    resolver: changePasswordFormResolver,
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
      const resData = await changePassword(data);
      form.reset();
      toast.success(resData.message);
    } catch (error) {
      toast.error((error as ClientError).message);
    }
  };

  return { form, onSubmit };
}
