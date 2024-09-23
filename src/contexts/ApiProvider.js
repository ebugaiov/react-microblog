import { createContext, useContext, useCallback, useMemo } from "react";
import MicorblogApiClient from "../MicroblogApiClient";
import { useFlash } from './FlashProvider';

const ApiContext = createContext();

export default function ApiProvider({ children }) {
    const flash = useFlash();

    const onError = useCallback(() => {
        flash('An unexpected error has occured. Please try again.', 'danger');
    }, [flash]);

    const api = useMemo(() => new MicorblogApiClient(onError), [onError]);

    return (
        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    );
}

export function useApi() {
    return useContext(ApiContext);
}