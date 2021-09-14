import {createContext} from "react";

interface GlobalContextInterface {
    render: string;
    setRender: (appName: string) => void;
}

const store = createContext<Partial<GlobalContextInterface>>({});

const {Provider, Consumer} = store;

export {store, Provider, Consumer}
