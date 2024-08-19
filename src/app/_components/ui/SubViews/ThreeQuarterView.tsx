import React from "react";

interface IThreeQuarterViewProps {
  children: React.ReactNode;
  divider?: boolean;
}

export const ThreeQuarterView: React.FC<IThreeQuarterViewProps> = ({
  children,
  divider,
}) => {
  const styles = {
    outerContainer: `flex justify-center`,
    innerContainer: divider
      ? `flex flex-wrap pt-4 pb-8 md:w-3/4 w-full border-zinc-300 border-solid border-t-2`
      : `flex flex-wrap py-8 md:w-3/4 w-full`,
  };
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>{children}</div>
    </div>
  );
};

export default ThreeQuarterView;
