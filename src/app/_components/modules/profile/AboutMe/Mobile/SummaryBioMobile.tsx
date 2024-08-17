import ParagraphTextMobile from "@/app/_components/common/Mobile/ParagraphTextMobile";
import { IStyles } from "@/app/_models/styles";

interface ISummaryBioMobileProps {
    elevator: string[];
    theme: IStyles;
}

export const SummaryBioMobile: React.FC<ISummaryBioMobileProps> = ({ elevator, theme }) => {

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
                        theme={theme}
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