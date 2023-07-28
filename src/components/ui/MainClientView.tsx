"use client";

import { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import { IUserData } from '@/models/user';
import { user } from '../../../data/user';
import Header from './Header';
import Footer from './Footer';

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
        setTimeout(() => setEntered(true), 3000)
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