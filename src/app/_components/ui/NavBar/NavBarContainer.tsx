import React from "react";
import { IStyles } from "@/app/_models/styles";
import Image from "next/image";

interface INavBarContainerProps {
  logo: any;
  children: React.ReactNode;
}

export const NavBarContainer: React.FC<INavBarContainerProps> = ({
  logo,
  children,
}) => {
  const styles = {
    container: `w-full z-10`,
    subContainer: `max-w-[1240px] m-auto flex justify-between items-center`,
    image: `flex flex-initial basis-1/8 rounded-full w-20 h-20`,
  };

  return (
    <nav id="leftNavBar" className={styles.container}>
      <div className={styles.subContainer}>
        <Image className={styles.image} src={logo?.image} alt={logo?.alt} />
        {children}
      </div>
    </nav>
  );
};

export default NavBarContainer;
