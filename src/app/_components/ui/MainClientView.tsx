"use client";

import { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import { IUserData } from '@/app/_models/user';
import Header from './Header';
import Footer from './Footer';
import { user } from '../../../../data/user';

interface IMainClientViewProps {
    children?: React.ReactNode;
}

export const MainClientView: React.FC<IMainClientViewProps> = ({ children }) => {

    const [entered, setEntered] = useState<boolean>(false)
    const [profileMain, setProfileMain] = useState<IUserData>(user)

    const styles = {
        container:`m-auto min-h-screen`
    }

    useEffect(() => {
        setTimeout(() => setEntered(true), 10)
    }, []
    )


    return (
        <>
            <div className={styles.container}>
                {entered ?
                    <>
                        <Header
                            profileMain={user}
                        />
                        <div>
                            {children}
                        </div>
                        <Footer
                            profileMain={user}
                        />

                    </>
                    :
                    <LandingPage
                        profile={profileMain["profile"]}
                    />
                }
            </div>

        </>
    )
}

export default MainClientView;