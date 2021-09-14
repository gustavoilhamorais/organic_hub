import React, {useState} from "react";
import {Provider} from "./context";

interface globalStateProps {
    children: any;
}

export default function Store({children}: globalStateProps) {
    const [render, setRender] = useState(() => "organicos");

    return (
        <Provider value={{render, setRender}}>
            {children}
        </Provider>
    );
}
