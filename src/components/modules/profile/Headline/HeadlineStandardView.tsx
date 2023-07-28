import { IProfile } from "@/models/user";
import { IStyles } from "@/models/styles";

interface IHeadlineStandardViewProps {
    headLine: IProfile;
    styling?: IStyles;
}


export const HeadlineStandardView: React.FC<IHeadlineStandardViewProps> = ({ headLine, styling }) => {

    const styles = {
        container: `hidden md:block`,
        mainHeadline: `dark:text-stone-100 text-7xl font-semibold py-1`,
        subHeadline: `dark:text-sky-200 text-5xl font-semibold italic pt-1 pb-3 opacity-70`
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

export default HeadlineStandardView;