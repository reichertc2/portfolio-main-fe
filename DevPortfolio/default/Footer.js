import Link from "next/link"
import { baseDarkText } from "../styles/colors"


export default function Footer({ profileMain }) {

    const renderCopyrightYear = () =>{
        let dateYear = new Date()
        return dateYear.getFullYear()
    }
    
    return (
        <footer className="p-3 text-center content-center">
            <h6 className={`dark:${baseDarkText} italic py-4`}>
                <Link href={profileMain.profile.profileURL}>
                    <a>{profileMain.profile.name} {renderCopyrightYear()} &copy;</a>
                </Link>
            </h6>
        </footer>
    )
}