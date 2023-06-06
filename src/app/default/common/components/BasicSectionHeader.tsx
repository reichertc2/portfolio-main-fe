import { subHeaderText } from "../../../styles/styles"

interface IBasicSectionHeader {
    headerTitle: string;
}
export const BasicSectionHeader: React.FC<IBasicSectionHeader> = ({ headerTitle }) => {

    return (

        <h3
            className={`${subHeaderText}`}>
            {headerTitle}
        </h3>

    )
}

export default BasicSectionHeader;