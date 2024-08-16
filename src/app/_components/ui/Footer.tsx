import { IStyles } from "@/app/_models/styles";
import { IUserData } from "@/app/_models/user";
import Link from "next/link"



interface IFooterProps {
    profileMain: IUserData;
    styling?: IStyles;
}

export const Footer: React.FC<IFooterProps> = ({ profileMain, styling }) => {

    const styles = {
        footer: `p-3 text-center content-center`,
        copyright: `dark:text-stone-100 italic py-4`
    }

    const renderCopyrightYear = () => {
        let dateYear = new Date()
        return dateYear.getFullYear()
    }

    return (
        <footer className={styles.footer}>
            <h6 className={styles.copyright}>
                <Link href={profileMain.profile.profileURL}>
                    <span>{profileMain.profile.name} {renderCopyrightYear()} &copy;</span>
                </Link>
            </h6>
        </footer>
    )
}

export default Footer;