import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StateCreator } from "zustand";

export interface IRiskFactors {
  prematureBirth: boolean;
  lowBirthWeight: boolean;
  geneticStructuralMalformations: boolean;
  medicationsInfectionsDuringPregnancy: boolean;
  antepartumHaemorrhage: boolean;
  hypoxicIschemicEncephalopathy: boolean;
  hydrocephalus: boolean;
  neonatalMeningitisSepsis: boolean;
  kernicterus: boolean;
  neonatalHypoglycaemia: boolean;
  cranioCerebralTrauma: boolean;
  apparentLifeThreateningEvent: boolean;
  paraSurgicalTrauma: boolean;
  neurologicalConditions?: string;
  neurologicalConditionsFamily?: string;
  specialNotes?: string;
}

export interface IUserData {
  user: IUser | undefined;
  report: IReport | undefined;
  riskFactors: IRiskFactors | undefined;
  score: number | undefined;
  severityLevel: string | undefined;
}

export interface IReport {
  [key: string]: number;
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
  reSetUserData: () => void;
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
  reSetUserData: () =>
    set(() => ({
      userData: {
        user: undefined,
        report: undefined,
        riskFactors: undefined,
        score: undefined,
        severityLevel: undefined,
      },
    })),
}));

export { useUserDataStore };
