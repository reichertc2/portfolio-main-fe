"use client";

import { useEffect, useState } from "react"
import { baseDarkText } from "../../../../../styles/colors"

interface IListBlockProps {
    title: string;
    listProps: string[];
    orientation: string;
}

export const ListBlock: React.FC<IListBlockProps> = ({ title, listProps, orientation }) => {

    const [verticalStyleUl, setVerticalStyleUl] = useState<string>()
    const [verticalStyleLi, setVerticalStyleLi] = useState<string>()

    const checkOrientation = () => {
        if (orientation === "vertical") {
            setVerticalStyleUl(`dark:text-stone-900 inline-block pr-3 align-top text-sm w-1/5`)
            setVerticalStyleLi("text-semibold pb-1")
        } else {
            setVerticalStyleUl(`dark:text-stone-900 inline-block inline-grid grid-cols-5 gap-2 text-sm pl-5 w-4/5`)
            setVerticalStyleLi("text-semibold col-span-full")

        }
    }

    useEffect(() => {
        checkOrientation()

    }, [])

    return (

        <ul className={verticalStyleUl}>


            <li className={verticalStyleLi}>{title}: </li>

            {
                listProps.map((item, idx) =>

                    <li
                        key={idx}
                        className="img-li pl-5 list-inside"
                    >
                        {item}
                    </li>
                )
            }

        </ul>

    )
}

export default ListBlock;