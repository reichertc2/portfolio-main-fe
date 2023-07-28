import { IProfile } from "@/models/user";
import { IStyles } from "@/models/styles";

interface IHeadlineMobileViewProps {
    headLine: IProfile;
    styling?: IStyles;
}


export const HeadlineMobileView: React.FC<IHeadlineMobileViewProps> = ({ headLine, styling }) => {

    const styles = {
        container: `sm:hidden block`,
        mainHeadline: `dark:text-stone-100 text-xl font-semibold py-1`,
        subHeadline: `dark:text-sky-200 text-sm font-semibold italic pb-3 opacity-70`
    }

    return (

        <div className={styles.container}>
            <p className={styles.mainHeadline}>
                {headLine["name"]}
            </p>
            <p className={styles.subHeadline}>
                {headLine["headline"]}
            </p>
        </div>

    )
}

export default HeadlineMobileView;