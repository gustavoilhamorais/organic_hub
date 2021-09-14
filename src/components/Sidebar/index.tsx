import React, {ReactElement} from "react";
import styled from "styled-components";
import SidebarSuper from "./SidebarSuper";

const CentralizeHorizontally = styled.div`
  text-align: center;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  align-content: space-between;

`;

const Container = styled.div`
  width: 5%;
  max-width: 75px;
  height: 100%;
  background-color: #282c34;
  position: absolute;
  border-right: solid #8d8d8d 3px;
  z-index: 100;
`;

interface SidebarProps {
    children: ReactElement[] | ReactElement;
}

const Sidebar = ({children}: SidebarProps) => {
    return (
        <Container>
            <CentralizeHorizontally>
                <SidebarSuper />
                {children}
            </CentralizeHorizontally>
        </Container>
    );
}

export default Sidebar;
