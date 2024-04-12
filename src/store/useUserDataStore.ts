import { create } from 'zustand';

interface IUserData {
    [key: string]: string;
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

const useUserDataStore = create<Store & Actions>(
    (set) => ({
        ...initialState,
        setUserData: (data: IUserData) => set(() => ({ userData: data })),
    })
);

export { useUserDataStore }