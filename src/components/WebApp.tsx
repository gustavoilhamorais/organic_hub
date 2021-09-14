import styled from "styled-components";
import React, {ReactElement, useContext} from "react";
import {store} from "../store/context";

const Application = styled.iframe`
  position: absolute;
  height: 100%;
  width: 100%;
  border: none;
`;

interface WebAppProps {
    name: string;
    url: string;
}

const WebApp = ({name, url}: WebAppProps): ReactElement => {
    const {render} = useContext(store);
    return (
        render === name
            ? <Application  loading="eager" name={name} src={url} />
            : <></>

    );
}

export default WebApp;
