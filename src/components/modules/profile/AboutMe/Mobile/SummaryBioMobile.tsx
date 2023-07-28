import ParagraphTextMobile from "@/components/common/Mobile/ParagraphTextMobile";
import { IStyles } from "@/models/styles";

interface ISummaryBioMobileProps {
    elevator: string[];
    styling?: IStyles;
}

export const SummaryBioMobile: React.FC<ISummaryBioMobileProps> = ({ elevator, styling }) => {

    const styles = {
        container: `w-50`,
        containerStandard: "sm:hidden w-50",
    }
    return (
        <div className={styles.container}>

            <div className={styles.containerStandard}>

                {
                    elevator.map((text, idx) =>
                        <ParagraphTextMobile
                            key={`${text}-${idx}`}
                            text={text}
                        />

                    )
                }

            </div>
        </div>
    )
}

export default SummaryBioMobile;