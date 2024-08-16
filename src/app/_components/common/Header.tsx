import NavBar from "./NavBar"
import { IUserData } from "../../_models/user";
import { INavigation } from "../../_models/navigation";
import { IStyles } from "../../default/common/MainClientPage";

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