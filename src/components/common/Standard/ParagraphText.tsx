
interface IParagraphTextProps {
    text: string;
}

export const ParagraphText: React.FC<IParagraphTextProps> = ({ text }) => {
    const styles = {
        text: `dark:text-sky-200 py-2`
    }

    return (

        <p
            className={styles.text}
        >
            {text}
        </p>

    )
}

export default ParagraphText;