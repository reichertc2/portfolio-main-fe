import ParagraphText from "@/app/_components/common/Standard/ParagraphText";
import { IStyles } from "@/app/_models/styles";

interface ISummaryBio {
    elevator: string[];
    theme: IStyles;
}

export const SummaryBio: React.FC<ISummaryBio> = ({ elevator, theme }) => {

    const styles = {
        container: `w-50`,
        containerStandard: "hidden sm:flex flex-col",
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerStandard}>

                {
                    elevator.map((text, idx) =>
                        <ParagraphText
                            key={`${text}-${idx}`}
                            text={text}
                            theme={theme}
                        />
                    )
                }

            </div>

        </div>
    )
}

export default SummaryBio;