import Link from "next/link"
import { IUserData } from "../../_models/user";
import { IStyles } from "../../default/common/MainClientPage";


interface IFooterProps {
    profileMain: IUserData;
    styles?: IStyles;
}

export const Footer: React.FC<IFooterProps>=({ profileMain, styles })=> {

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