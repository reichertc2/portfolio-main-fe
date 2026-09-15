"use client";

import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

interface IListBlockProps {
    title: string;
    listProps: string[];
    /** `true` = stacked list, `false`/`undefined` = inline (horizontal) */
    vertical?: boolean;
}

export const ListBlock: React.FC<IListBlockProps> = ({
                                                         title,
                                                         listProps,
                                                         vertical = false,
                                                     }) => {
    const styles = vertical
        ? {
            ul: "dark:text-text-dark inline-block text-sm md:w-3/5",
            liTitle: "text-semibold pb-4",
            li: "border-1 border-secondary mx-2 rounded-md",
        }
        : {
            ul: "dark:text-text-dark inline-block text-sm w-4/5",
            liTitle: "pb-4 text-semibold col-span-full",
            li: "inline border-1 border-secondary mx-2 py-2 rounded-md",
        };

    return (
        <ul className={styles.ul}>
            <li className={styles.liTitle}>{title}:</li>
            {listProps.map((item, idx) => (
                <li
                    key={idx}
                    className={`${styles.li}  px-2  italic`}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default ListBlock;
