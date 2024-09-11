import { createContext, useContext } from "react";
import MicorblogApiClient from "../MicroblogApiClient";

const ApiContext = createContext();

export default function ApiProvider({ children }) {
    const api = new MicorblogApiClient();

    return (
        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    );
}

export function useApi() {
    return useContext(ApiContext);
}