import { subHeaderText } from "../../../styles/styles"


export default function BasicSectionHeader({ headerTitle }) {

    return (

        <h3
            className={`${subHeaderText}`}>
            {headerTitle}
        </h3>

    )
}

