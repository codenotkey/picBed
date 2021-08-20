import AuthStore from "./auth";
import UserStore from './user'
import ImageStore from './image'
import HistoryStore from './history'
import React , {useContext, createContext} from "react";

const context = createContext({
    AuthStore,
    UserStore,
    ImageStore,
    HistoryStore
})
window.stores = {
    AuthStore,
    UserStore,
    ImageStore,
    HistoryStore
};

export const useStores = () => useContext(context)
