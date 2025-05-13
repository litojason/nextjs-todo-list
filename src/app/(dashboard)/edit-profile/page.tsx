import { Metadata } from "next";

import SectionContainer from "@/components/container/section-container";
import EditProfileForm from "@/components/form/edit-profile-form";
import ChangePasswordForm from "@/components/form/change-password-form";

export const metadata: Metadata = {
  title: "Edit Profile",
};

export default function EditProfilePage() {
  return (
    <main className="w-full h-screen">
      <div className="flex flex-col lg:flex-row p-4 md:p-6 gap-4 md:gap-6">
        <SectionContainer className="flex-1" title="Basic Information">
          <EditProfileForm />
        </SectionContainer>

        <SectionContainer className="flex-1" title="Change Password">
          <ChangePasswordForm />
        </SectionContainer>
      </div>
    </main>
  );
}
