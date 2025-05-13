import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { ClientError } from "@/lib/client";
import { EditProfileFormData, editProfileFormResolver } from "@/models/user";
import { editProfile } from "@/actions/user";
import { useUserContext } from "@/context/user-provider";

export default function useEditProfile() {
  const { profile, profileLoading } = useUserContext();

  const form = useForm<EditProfileFormData>({
    resolver: editProfileFormResolver,
    defaultValues: {
      name: profile?.name || "",
    },
  });

  const name = form.watch("name");

  const buttonDisabled = name === profile?.name || form.formState.isSubmitting;

  useEffect(() => {
    if (profile) {
      form.reset({
        name: profile.name,
      });
    }
  }, [profile, form]);

  const onSubmit = async (data: EditProfileFormData) => {
    try {
      const resData = await editProfile(data);
      toast.success(resData.message);
    } catch (error) {
      toast.error((error as ClientError).message);
    }
  };

  return { form, onSubmit, profile, profileLoading, buttonDisabled };
}
