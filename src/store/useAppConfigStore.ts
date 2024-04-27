import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { StateCreator } from 'zustand';

interface Store {
    step: number;
}

interface Actions {
    setStep: (step: number) => void;
}

const useAppConfigStore = create<Store & Actions>(persist(
    (set) => ({
        step: 0,
        setStep: (step: number) => set(() => ({ step }))
    }),
    {
        name: 'app-storage',
        getStorage: () => localStorage
    }
) as StateCreator<Store & Actions, [], []>)

export { useAppConfigStore }