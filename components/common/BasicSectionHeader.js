import { baseDarkText, accentDarkText } from "../../styles/colors"

export default function BasicSectionHeader({ headerTitle }) {

    return (
        
            <h3
                className={`text-xl dark:${baseDarkText()} py-1 font-semibold`}>
        {headerTitle}
            </h3>

    )
}

