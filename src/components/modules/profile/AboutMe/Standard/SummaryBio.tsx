import ParagraphText from "@/components/common/Standard/ParagraphText";
import { IStyles } from "@/models/styles";

interface ISummaryBio {
    elevator: string[];
    styling?: IStyles;
}

export const SummaryBio: React.FC<ISummaryBio> = ({ elevator, styling }) => {

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
                        />
                    )
                }

            </div>

        </div>
    )
}

export default SummaryBio;