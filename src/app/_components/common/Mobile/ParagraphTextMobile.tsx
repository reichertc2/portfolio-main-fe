import { IStyles } from "@/app/_models/styles";

interface IParagraphTextMobileProps {
    text: string;
    theme: IStyles
}

export const ParagraphTextMobile: React.FC<IParagraphTextMobileProps> = ({ text, theme }) => {
    const styles = {
        text: `dark:${theme.texts.dark} py-2 text-sm`
    }

    return (

        <p
            className={styles.text}
        >
            {text}
        </p>

    )
}

export default ParagraphTextMobile;