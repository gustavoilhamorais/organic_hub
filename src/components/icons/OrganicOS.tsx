import React, {ReactElement} from "react";
import CustomIMG from "./CustomIMG";
import organicosLogo from "../../assets/organicos-logo.jpg";

const OrganicOS = (): ReactElement => {
    return (
        <CustomIMG alt="Organic_OS logo"  src={organicosLogo} />
    );
}

export default OrganicOS;
