import React, {ReactElement} from "react";
import discordLogo from "../../assets/discord-logo.svg";
import CustomSVG from "./CustomSVG";

const Discord = (): ReactElement => {
    return (
        <CustomSVG width="26" type="image/svg+xml" data={discordLogo} />
    );
}

export default Discord;
