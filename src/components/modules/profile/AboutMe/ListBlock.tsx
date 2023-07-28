"use client";

import { IStyles } from "@/models/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

interface IListBlockProps {
    title: string;
    listProps: string[];
    orientation: string;
    styles?: IStyles;
}

interface IListBlockStyling {
    ul: string;
    liTitle: string;
    li: string;
}

export const ListBlock: React.FC<IListBlockProps> = ({ title, listProps, orientation, styles }) => {

    const defaultOrientation: IListBlockStyling = {
        ul: `dark:text-sky-200 inline-block pr-3 text-sm w-3/5`,
        liTitle: "text-semibold pb-1",
        li: ``
    }

    const [verticalStyle, setVerticalStyle] = useState<IListBlockStyling>(defaultOrientation)

    const checkOrientation = () => {
        let verticalStyles = verticalStyle
        if (orientation === "vertical" || orientation === "v") {
            setVerticalStyle(defaultOrientation)
        } else {
            verticalStyles.ul = `dark:text-sky-200 inline-block text-sm pl-5 w-4/5`
            verticalStyles.liTitle = `pb-1 text-semibold col-span-full`
            verticalStyles.li = `inline`
            setVerticalStyle(verticalStyles)
        }
    }

    useEffect(() => {
        checkOrientation()

    })

    return (

        <ul className={verticalStyle.ul}>


            <li className={verticalStyle.liTitle}>{title}: </li>

            {
                listProps.map((item, idx) =>

                    <li
                        key={idx}
                        className={`${verticalStyle.li} img-li pl-5 list-inside italic`}
                    >
                       <FontAwesomeIcon icon={faCode} /> {item}
                    </li>
                )
            }

        </ul>

    )
}

export default ListBlock;