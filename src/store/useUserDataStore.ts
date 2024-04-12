import { create } from "zustand";
import { persist } from 'zustand/middleware';
import type { StateCreator } from 'zustand';

interface IScoreData {
  [key: string]: number;
}

interface IUserData {
  [key: string]: IScoreData;
}

interface Store {
  userData: IUserData | undefined;
}

interface Actions {
  setUserData: (data: IUserData) => void;
}

const initialState: Store = {
  userData: undefined,
};

const useUserDataStore = create<Store & Actions>(persist((set) => ({
  ...initialState,
  setUserData: (data: IUserData) => set(() => ({ userData: data })),
}),
{
  name: 'app-storage',
  getStorage: () => localStorage
}) as StateCreator<Store & Actions, [], []>
);

export { useUserDataStore };
