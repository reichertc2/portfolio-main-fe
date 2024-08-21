import React from "react";
import { IStyles } from "@/app/_models/styles";
import { IProfile } from "@/app/_models/user";
import Image from "next/image";

interface ILandingPageProps {
  profile: IProfile;
  theme: IStyles;
}

export const LandingPage: React.FC<ILandingPageProps> = ({
  profile,
  theme,
}) => {
  const styles = {
    container: `m-auto transition delay-1000`,
    main: `flex justify-center items-center w-full h-screen text-center ease-in duration-300`,
    logo: `animate-pulse rounded-full w-28 h-28`,
  };

  return (
    <div className={styles.container}>
      <main id="landingMain" className={styles.main}>
        {profile.logo && (
          <Image
            className="animate-pulse rounded-full w-28 h-28"
            src={profile.logo.image}
            alt={profile.logo.alt}
          />
        )}
      </main>
    </div>
  );
};

export default LandingPage;
