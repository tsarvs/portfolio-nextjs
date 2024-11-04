import {
    SiReact,
    SiTypescript,
    SiCsharp,
    SiTerraform,
    SiBitrise,
    SiStorybook,
    SiFigma, //more like sigma amirite
    SiAwslambda,
    SiPostgresql,
    SiNodedotjs,
} from "react-icons/si";

import {FaAws} from "react-icons/fa";

import {IconType} from "react-icons";

export type ProjectProps = {
    id: number;
    name: string;
    role: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github?: string;
    demo?: string;
    image: string;
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "LocumTenens.com Mobile App",
        role: "Team Lead / Front-End Developer",
        description:
            "Cross-platform mobile app for traveling healthcare professionals to manage their locum tenens jobs.",
        technologies: [SiTypescript, SiReact, SiCsharp, SiBitrise, SiFigma, SiStorybook],
        techNames: ["TypeScript", "React Native", ".Net Core", 'Bitrise CI/CD', "Storybook"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactnative.dev/", "https://dotnet.microsoft.com/en-us/apps/aspnet/apis", "https://bitrise.io/", "https://www.figma.com/", "https://storybook.js.org/"],
        github: undefined,
        demo: "https://play.google.com/store/apps/details?id=com.locumtenens.clinicianapp",
        image: "/projects/LTGooglePlay.png",
        available: true,
    },
    {
        id: 1,
        name: "IoT Dashboard",
        role: "Full Stack Developer / Cloud Architect",
        description:
            "Front-end dashboard for an IoT project that visualizes data from sensors in real-time. Powered by AWS IoT.",
        technologies: [FaAws, SiAwslambda, SiReact, SiTypescript, SiNodedotjs, SiPostgresql, SiTerraform],
        techNames: ["AWS IoT", "AWS Lambda","React", "Typescript", "Node.js","PostgreSQL","Terraform"],
        techLinks: ["https://aws.amazon.com/iot/", "https://aws.amazon.com/lambda/", "https://reactjs.org/", "https://www.typescriptlang.org/", "https://nodejs.org","https://www.postgresql.org/", "https://www.terraform.io/"],
        github: undefined,
        demo: "https://www.bapihvac.com/wp-content/uploads/50387_Wireless_BLE_Gateway.pdf",
        image: "/projects/DashboardBAPI.jpg",
        available: true,
    },
];
