import React from "react";
import Link from "next/link";
import { INavigation } from "@/app/_models/navigation";
import { IStyles } from "@/app/_models/styles";

interface INavBarStandardViewProps {
  theme: IStyles;
  navigations: INavigation[];
  showThemeChange: boolean;
  renderThemeChanger: () => React.ReactNode;
}

export const NavBarStandardView: React.FC<INavBarStandardViewProps> = ({
  theme,
  navigations,
  showThemeChange,
  renderThemeChanger,
}) => {
  const styles = {
    container: `hidden sm:flex`,
    navLi: `px-2 dark:${theme.texts.dark} pt-4`,
    hoverAnimation: `hover-underline-animation`,
    spacingLi: `px-2 dark:${theme.texts.dark} pt-2`,
    themeChangerLi: `px-2 dark:${theme.texts.dark} pt-4`,
  };

  return (
    <>
      <ul className={styles.container}>
        {navigations.map((nav) => (
          <li key={nav.label} className={styles.navLi}>
            <Link href={nav.path}>
              <span className={styles.hoverAnimation}>{nav.label}</span>
            </Link>
          </li>
        ))}

        <li className={styles.spacingLi}></li>
        {showThemeChange && (
          <li className={styles.themeChangerLi}>{renderThemeChanger()}</li>
        )}
      </ul>
    </>
  );
};

export default NavBarStandardView;
