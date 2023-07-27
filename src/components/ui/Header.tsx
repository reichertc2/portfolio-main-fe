import { INavigation } from "@/models/navigation";
import { IUserData } from "@/models/user";
import { IStyles } from "./MainClientPage";
import NavBar from "./NavBar"


interface IHeaderProps {
    profileMain: IUserData;
    styles?: IStyles;
}



export const Header: React.FC<IHeaderProps> = ({ profileMain, styles }) => {

    const navigations: INavigation[] = [
        { label: 'Profile', path: '#AboutMeSection' },
    ]


    return (
        <header className="flex flex-row w-full">

            <NavBar
                styles={styles}
                navigations={navigations}
                logo={profileMain.profile.logo}
                showThemeChange={true}

            />

        </header>
    )
}

export default Header;