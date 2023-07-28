import { INavigation } from "@/models/navigation";
import { IUserData } from "@/models/user";
import NavBar from "./NavBar"
import { IStyles } from "@/models/styles";


interface IHeaderProps {
    profileMain: IUserData;
    styling?: IStyles;
}



export const Header: React.FC<IHeaderProps> = ({ profileMain, styling }) => {

    const navigations: INavigation[] = [
        { label: 'Profile', path: '#AboutMeSection' },
    ]


    return (
        <header className="flex flex-row w-full">

            <NavBar
                styling={styling}
                navigations={navigations}
                logo={profileMain.profile.logo}
                showThemeChange={true}

            />

        </header>
    )
}

export default Header;