"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { User } from "@/models/user";
import { getProfile } from "@/actions/user";

type UserContextType = {
  profile?: User;
  handleGetProfile: () => void;
  profileLoading: boolean;
};

const UserContext = createContext<UserContextType | null>(null);
export const useUserContext = () => useContext(UserContext) as UserContextType;

const UserProvider = ({ children }: PropsWithChildren) => {
  const [profile, setProfile] = useState<User>();
  const [profileLoading, setProfileLoading] = useState(false);

  useEffect(() => {
    handleGetProfile();
  }, []);

  const handleGetProfile = async () => {
    setProfileLoading(true);

    try {
      const resData = await getProfile();
      setProfile(resData);
    } catch (error) {
      console.log("handleGetProfile error", error);
    } finally {
      setProfileLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        profile,
        handleGetProfile,
        profileLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
