import React, {ReactElement} from 'react';
import Column from "../Column";
import {FaAtom} from "react-icons/fa";
import styled from "styled-components";

const IconStyle = styled.h2`
  color: #fff;
  margin-bottom: 50px;
`;

const SidebarSuper = (): ReactElement => {
    return (
        <Column top="99%">
            <IconStyle>
                <FaAtom />
            </IconStyle>
        </Column>
    );
};

export default SidebarSuper;
