import NavBar from "./NavBar"
import { IUserData } from "../../models/user";
import { INavigation } from "../../models/navigation";

interface IHeaderProps {
    profileMain: IUserData;
}



export const Header: React.FC<IHeaderProps> = ({ profileMain }) => {

    const navigations: INavigation[] = [
        { label: 'Profile', path: '#AboutMeSection' },
    ]


    return (
        <header className="flex flex-row w-full">

            <NavBar
                navigations={navigations}
                logo={profileMain.profile.logo}
                showThemeChange={true}

            />

        </header>
    )
}

export default Header;