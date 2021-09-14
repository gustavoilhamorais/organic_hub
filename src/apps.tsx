import React, {ReactElement} from "react";
import Discord from "./components/icons/Discord";
import {Github, Instagram, Linkedin, Medium} from "@rsuite/icons/lib/icons/legacy";
import Whatsapp from "@rsuite/icons/legacy/Whatsapp";
import OrganicOS from "./components/icons/OrganicOS";
import Vanpress from "./components/icons/Vanpress";
import Gus from "./components/icons/Gus";

interface ApplicationProps {
    type: string;
    url: string;
    appName: string;
    Icon: () => ReactElement;
}

const apps: Array<ApplicationProps> = [
    {
        "type": "render",
        "url": "http://organicopensource.com.br",
        "appName": "organicos",
        Icon: () => <OrganicOS />
    },
    {
        "type": "render",
        "url": "https://clubeamigosdobem.com.br",
        "appName": "vanpress",
        Icon: () => <Vanpress />
    },
    {
        "type": "render",
        "url": "https:/gustavoilhamorais.herokuapp.com",
        "appName": "gustavoilhamorais",
        Icon: () => <Gus />
    },
    {
        "type": "open",
        "url": "https://discord.gg/DDfsGhue",
        "appName": "discord",
        Icon: () => <Discord />
    },
    {
        "type": "open",
        "url": "https://medium.com/@gustavoilhamorais",
        "appName": "medium",
        Icon: () => <Medium />
    },
    {
        "type": "open",
        "url": "https://github.com/gustavoilhamorais",
        "appName": "github",
        Icon: () => <Github />
    },
    {
        "type": "open",
        "url": "https://www.instagram.com/gust.1977",
        "appName": "instagram",
        Icon: () => <Instagram />
    },
    {
        "type": "open",
        "url": "https://api.whatsapp.com/send?phone=+5541984510271",
        "appName": "whatsapp",
        Icon: () => <Whatsapp />
    },
    {
        "type": "open",
        "url": "https://www.linkedin.com/in/gustavo-ilha-morais-283b19161/",
        "appName": "linkedin",
        Icon: () => <Linkedin />
    },
];

export default apps;
