"use client"

import { IUserData } from "../models/user";
import { IStyles } from "./MainClientPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

interface IMainPageProps {
    user: IUserData;
    styles: IStyles;
}

export const MainPage: React.FC<IMainPageProps> = ({ user, styles }) => {

    return (
        <div className='m-auto min-h-screen'>
            <Header
                profileMain={user}
                styles={styles}
            />
            <Main
                profileMain={user}
                styles={styles}
            />
            <Footer
                profileMain={user}
                styles={styles}
            />
        </div>
    )
}

export default MainPage;