import { StaticImageData } from "next/image";
import javaScript from "/public/assets/javaScript.png";
import reactJS from "/public/assets/reactJS.png";
import nextJS from "/public/assets/whiteNextJS.png";
import blackNextJs from "/public/assets/blackNextJS.png";

interface OptionRequirement {
    [key: number | string]: any;

    dark: {
        icon: StaticImageData;
        alt: string;
    }[];

    ligth: {
        icon: StaticImageData;
        alt: string;
    }[];
}

export const hardSkills: OptionRequirement = {
    dark: [
        {
            icon: javaScript,
            alt: "icone do javaScript",
        },
        {
            icon: reactJS,
            alt: "icone do reactJS",
        },
        {
            icon: nextJS,
            alt: "icone do nextJS",
        },
    ],

    ligth: [
        {
            icon: javaScript,
            alt: "icone do javaScript",
        },
        {
            icon: reactJS,
            alt: "icone do reactJS",
        },
        {
            icon: blackNextJs,
            alt: "icone do nextJS",
        },
    ],
};
