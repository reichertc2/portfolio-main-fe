import React from "react";
import { IStyles } from "@/app/_models/styles";
import BasicSectionHeader from "./headers/BasicSectionHeader";

interface IProfileSectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

export const ProfileSection: React.FC<IProfileSectionProps> = ({
  id,
  title,
  children,
}) => {
  const styles = {
    container: `min-h-[85vh] flex flex-col items-center justify-center md:w-3/4 m-auto`,
  };

  return (
    <section id={id} className={styles.container}>
      {title && <BasicSectionHeader headerTitle={title} />}

      {children}
    </section>
  );
};

export default ProfileSection;
