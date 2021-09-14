import React, {useContext, useEffect} from 'react';
import WebApp from "./components/WebApp";
import Router from "./components/Router";
import {store} from "./store/context";
import apps from "./apps";

function App() {
    const {render} = useContext(store);

    useEffect(() => {
        // Hide vertical scroll and use iframe's
        if (render === "organicos") {
            const body = document.querySelector("body");
            if (body) body.style.overflowY = "hidden";
        }
    }, [render]);

    return (
        <Router>
            {apps.map(application => {
                return (
                    <WebApp key={application.appName} name={application.appName} url={application.url} />
                );
            })}
        </Router>
    );
}

export default App;
