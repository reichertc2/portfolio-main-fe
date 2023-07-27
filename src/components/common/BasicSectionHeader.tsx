import { IStyles } from "../ui/MainClientPage";

interface IBasicSectionHeader {
    headerTitle: string;
    styles?: IStyles
}
export const BasicSectionHeader: React.FC<IBasicSectionHeader> = ({ headerTitle, styles }) => {

    return (

        <h3
            className={`text-xl dark:text-stone-100 py-1 font-semibold`}>
            {headerTitle}
        </h3>

    )
}

export default BasicSectionHeader;