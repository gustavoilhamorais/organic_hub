import React, {ReactElement, useContext} from "react";
import SidebarItemLink from "./SidebarItemLink";
import {store} from "../../store/context";

type navItemActionType = {
    type: string;
    url?: string;
    appName: string;
}

interface NavItemProps {
    children: ReactElement;
    action: navItemActionType;
}

const SidebarItem = ({children, action}: NavItemProps) => {
    const {setRender} = useContext(store);

    function handleClickNavItem(): void {
        switch (action.type) {
            case "open":
                window.open(action?.url, "_blank");
                break;

            case "render":
                if (setRender) {
                    setRender(action.appName);
                }
                break;

            default:
                break;
        }
    }

    return (
        <SidebarItemLink onClick={handleClickNavItem}>{children}</SidebarItemLink>
    );
}

export default SidebarItem;
