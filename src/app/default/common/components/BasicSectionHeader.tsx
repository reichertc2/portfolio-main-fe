import { subHeaderText } from "../../../styles/styles"

interface IBasicSectionHeader {
    headerTitle: string;
}
export const BasicSectionHeader: React.FC<IBasicSectionHeader> = ({ headerTitle }) => {

    return (

        <h3
            className={`text-xl dark:text-stone-900 py-1 font-semibold`}>
            {headerTitle}
        </h3>

    )
}

export default BasicSectionHeader;