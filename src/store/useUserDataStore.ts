import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StateCreator } from "zustand";

interface IScoreData {
  [key: string]: number;
}

export interface IRiskFactors {
  prematureBirth: boolean;
  lowBirthWeight: boolean;
  neonatalICUStay: boolean;
  historyOfSeizures: boolean;
  neurologicalConditions?: string;
  neurologicalConditionsFamily?: string;
}

export interface IUserData {
  user: IUser | undefined;
  report: IReport | undefined;
  riskFactors: IRiskFactors | undefined;
  score: number | undefined;
  severityLevel: string | undefined;
}

export interface IReport {
  [key: string]: IScoreData;
}

export interface IUser {
  childName: string;
  childDateOfBirth: string;
  childGender: string;
  childBirthCertificate: string;
  guardianName?: string;
  guardianAddress?: string;
  guardianEmail?: string;
  guardianPhone?: string;
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

// const useUserDataStore = create<Store & Actions>(persist((set) => ({
//   ...initialState,
//   setUserData: (data: IUserData) => set(() => ({ userData: data })),
// }),
// {
//   name: 'app-storage',
//   getStorage: () => localStorage
// }) as StateCreator<Store & Actions, [], []>
// );

const useUserDataStore = create<Store & Actions>((set) => ({
  ...initialState,
  setUserData: (data: IUserData) => set(() => ({ userData: data })),
}));

export { useUserDataStore };
