import React from "react";
import Link from "next/link";

interface IButtonGenericProps {
    text: string;
    url: string;
    isPrimary?: boolean;
    download?: boolean | string;
}

export const ButtonGeneric: React.FC<IButtonGenericProps> = ({
                                                                 text,
                                                                 url,
                                                                 isPrimary = true,
                                                                 download = false,
                                                             }) => {
    const styles = {
        button: `inline-flex items-center justify-center w-full sm:w-auto mx-0 sm:mx-2 mb-2 sm:mb-2 mt-4 sm:mt-2 px-4 py-2 text-base sm:text-lg border border-solid rounded-md dark:text-text-dark`,
        primary: `bg-primary-dark border-primary text-text-dark`,
        secondary: `border-secondary`,
    };

    const className = `${styles.button} ${
        isPrimary ? styles.primary : styles.secondary
    }`;

    if (download) {
        const filename = typeof download === "string" ? download : undefined;

        return (
            <a href={url} download={filename} className={`${className} py-3`}>
                {text}
            </a>
        );
    }

    return (
        <Link href={url} className={className}>
            {text}
        </Link>
    );
};

export default ButtonGeneric;