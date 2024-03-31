import { create } from "zustand";

type AuthInfo = {
  isLogin: boolean;
};

type AuthState = {
  authInfo: AuthInfo;
};

type AuthAction = {
  login: () => void;
  logout: () => void;
};

const defaultState: AuthInfo = { isLogin: false };

export const useAuthState = create<AuthState & AuthAction>((set) => ({
  authInfo: defaultState,
  login: () => {
    set({ authInfo: { isLogin: true } });
  },
  logout: () => {
    set({ authInfo: { isLogin: false } });
  },
}));
