import AuthStore from "./auth";
import UserStore from './user'
import React , {useContext, createContext} from "react";

const context = createContext({
    AuthStore,
    UserStore
})
window.stores = {
    AuthStore,
    UserStore
};

export const useStores = () => useContext(context)
