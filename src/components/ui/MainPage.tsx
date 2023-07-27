"use client"

import { IUserData } from "@/models/user";
import Footer from "./Footer";
import Header from "./Header";
import { IStyles } from "./MainClientPage";
import Main from "./Main";



interface IMainPageProps {
    user: IUserData;
    styles?: IStyles;
}

export const MainPage: React.FC<IMainPageProps> = ({ user, styles }) => {

    return (
        <div className='m-auto min-h-screen'>
            <Header
                profileMain={user}
            />
            <Main
                profileMain={user}
            />
            <Footer
                profileMain={user}
            />
        </div>
    )
}

export default MainPage;