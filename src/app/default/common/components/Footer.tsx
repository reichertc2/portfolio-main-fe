import Link from "next/link"
import { baseDarkText } from "../../../styles/colors"
import { IUserData } from "../../models/user";


interface IFooterProps {
    profileMain: IUserData;
}

export const Footer: React.FC<IFooterProps>=({ profileMain })=> {

    const renderCopyrightYear = () =>{
        let dateYear = new Date()
        return dateYear.getFullYear()
    }
    
    return (
        <footer className="p-3 text-center content-center">
            <h6 className={`dark:text-stone-100 italic py-4`}>
                <Link href={profileMain.profile.profileURL}>
                    <span>{profileMain.profile.name} {renderCopyrightYear()} &copy;</span>
                </Link>
            </h6>
        </footer>
    )
}

export default Footer;