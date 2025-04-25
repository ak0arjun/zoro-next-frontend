import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserModel } from "../models/user.model";

/**
 * User state interface
 */
interface UserState {
  jwtToken: string;
  profile?: UserModel;
  setJwtToken: (token: string) => void;
  clearJwtToken: () => void;
  setUserProfile: (_profile: UserModel) => void;
}

/**
 * State management for user token
 */
const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      jwtToken: "",
      profile: undefined,
      setJwtToken: (token) => set(() => ({ jwtToken: token })),
      clearJwtToken: () => set(() => ({ jwtToken: "" })),
      setUserProfile: (_profile) => set(() => ({ profile: _profile })),
    }),
    {
      name: "user-storage",
    },
  ),
);

export default useUserStore;
