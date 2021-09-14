import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import SidebarItem from "./Sidebar/SidebarItem";
import Column from "./Column";
import apps from "../apps";

const Content = styled.main`
  width: 90%;
  padding: 0;
  margin-left: 5%;
  margin-right: 5%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

interface AppContainerProps {
    children: any;
}

const Router = ({children}: AppContainerProps) => {
    return (
        <>
            <Sidebar>
                <Column top="85%">
                    {apps.map(application => {
                        const {Icon, type, appName, url} = application;
                        return (
                            <SidebarItem key={appName} action={{type, appName, url}}>
                                <Icon />
                            </SidebarItem>
                        )
                    })}
                </Column>
                {/*<Column bottom="100%">*/}
                {/*    <h2 style={{color: "#fff", alignItems: "end"}}>*/}
                {/*        <FaCog />*/}
                {/*    </h2>*/}
                {/*</Column>*/}
            </Sidebar>
            <Content>
                {children}
            </Content>
        </>
    );
};

export default Router;
