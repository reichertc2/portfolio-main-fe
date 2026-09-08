import React from "react";

interface IBasicSectionHeader {
  headerTitle: string;
}
export const BasicSectionHeader: React.FC<IBasicSectionHeader> = ({
  headerTitle,
}) => {
  const styles = {
    container: `flex justify-self-start text-xl dark:text-text-dark font-semibold w-full`,
    title: `md:border-2 md:order-solid md:w-1/4 rounded-t-md px-2  py-1 `,
  };
  return (
    <h3 className={styles.container}>
      <div className={styles.title}>{headerTitle}</div>
    </h3>
  );
};

export default BasicSectionHeader;
