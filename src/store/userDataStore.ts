import { createStore } from 'zustand';

interface IUserData {
    name: string;
}

interface IUserDataStore {
    userData: IUserData | undefined;
}

interface IActions {
    setUserData: (data: IUserData) => void;
}

const userDataStore = createStore<IUserDataStore & IActions>(
    (set) => ({
        userData: undefined,
        setUserData: (userData: IUserData) => set(() => ({ userData })),
    })
);

export default userDataStore;
