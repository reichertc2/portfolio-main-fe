
interface IParagraphTextMobileProps {
    text: string;
}

export const ParagraphTextMobile: React.FC<IParagraphTextMobileProps> = ({ text }) => {
    const styles = {
        text: `dark:text-sky-200 py-2 text-sm`
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