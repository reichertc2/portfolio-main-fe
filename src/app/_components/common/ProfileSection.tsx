import React from "react";
import { IStyles } from "@/app/_models/styles";
import BasicSectionHeader from "./BasicSectionHeader";

interface IProfileSectionProps {
  id: string;
  title?: string;
  theme: IStyles;
  children: React.ReactNode;
}

export const ProfileSection: React.FC<IProfileSectionProps> = ({
  id,
  title,
  theme,
  children,
}) => {
  const styles = {
    container: `min-h-[85vh] flex ${theme} w-3/4 m-auto`,
  };

  return (
    <section id={id} className={styles.container}>
      {title && <BasicSectionHeader headerTitle={title} theme={theme} />}

      {children}
    </section>
  );
};

export default ProfileSection;
