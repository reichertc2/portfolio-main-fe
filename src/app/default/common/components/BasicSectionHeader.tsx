import { IStyles } from "../MainClientPage";

interface IBasicSectionHeader {
    headerTitle: string;
    styles: IStyles
}
export const BasicSectionHeader: React.FC<IBasicSectionHeader> = ({ headerTitle, styles }) => {

    return (

        <h3
            className={`text-xl dark:${styles.darkText} py-1 font-semibold`}>
            {headerTitle}
        </h3>

    )
}

export default BasicSectionHeader;