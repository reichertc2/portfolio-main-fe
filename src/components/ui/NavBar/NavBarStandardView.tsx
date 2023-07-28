import Link from "next/link"
import { INavigation } from "@/models/navigation"
import { IStyles } from "@/models/styles"

interface INavBarStandardViewProps {
    styling?: IStyles;
    navigations: INavigation[];
    showThemeChange: boolean;
    renderThemeChanger: () => React.ReactNode
}

export const NavBarStandardView: React.FC<INavBarStandardViewProps> = ({ styling, navigations, showThemeChange, renderThemeChanger }) => {

    const styles = {
        container: `hidden sm:flex`,
        navLi: `px-2 dark:text-sky-200 pt-4`,
        hoverAnimation: `hover-underline-animation`,
        spacingLi: `px-2 dark:text-stone-900 pt-2`,
        themeChangerLi: `px-2 dark:text-stone-900 pt-4`
    }

    return (
        <>

            <ul className={styles.container}>

                {navigations.map(nav => (
                    <li
                        key={nav.label}
                        className={styles.navLi}
                    >
                        <Link href={nav.path}>
                            <span className={styles.hoverAnimation}>{nav.label}</span>
                        </Link>
                    </li>
                )
                )
                }

                <li className={styles.spacingLi}>
                </li>
                {
                    showThemeChange ?
                        <li className={styles.themeChangerLi}>
                            {renderThemeChanger()}
                        </li>
                        : ""
                }

            </ul>
        </>
    )
}

export default NavBarStandardView;