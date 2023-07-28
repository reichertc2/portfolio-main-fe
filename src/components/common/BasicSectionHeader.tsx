import { IStyles } from "@/models/styles";

interface IBasicSectionHeader {
    headerTitle: string;
    styles?: IStyles
}
export const BasicSectionHeader: React.FC<IBasicSectionHeader> = ({ headerTitle, styles }) => {

    return (

        <h3
            className={`flex justify-self-start text-xl dark:text-stone-100 py-1 font-semibold `}>
            {headerTitle}
        </h3>

    )
}

export default BasicSectionHeader;