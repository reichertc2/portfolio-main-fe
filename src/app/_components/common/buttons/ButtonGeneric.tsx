import React from "react";
import Link from "next/link";

interface IButtonGenericProps {
    text: string;
    url: string;
    urlText: string;
    isPrimary?: boolean;
    download?: boolean | string;
}

export const ButtonGeneric: React.FC<IButtonGenericProps> = ({
                                                                 text,
                                                                 url,
                                                                 urlText,
                                                                 isPrimary = true,
                                                                 download = false,
                                                             }) => {
    const styles = {
        button: `mx-2 mb-4 mt-8 px-4 py-2 dark:text-text-dark text-lg border-1 border-solid rounded-md`,
        primary: `bg-primary-dark border-secondary text-text-dark`,
        secondary: ``
    }

    if (download) {
        const filename = typeof download === "string" ? download : undefined;

        return (
            <a href={url} download={filename}
               className={`${styles.button} ${isPrimary ? styles.primary : styles.secondary} py-3`}>
                {text}
            </a>
        );
    }
    return (
        <Link href={url}>
            <button className={`${styles.button} ${isPrimary ? styles.primary : styles.secondary}`}>
                {text}
            </button>
        </Link>
    );
};

export default ButtonGeneric;
