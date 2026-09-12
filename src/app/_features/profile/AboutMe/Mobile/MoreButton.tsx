import React from "react";

interface IMoreButtonProps {
  moreButton: boolean;
  setMoreButton: (click: boolean) => void;
}

export const MoreButton: React.FC<IMoreButtonProps> = ({
  moreButton,
  setMoreButton,
}) => {
  const handleMoreButton = () => {
    setMoreButton(false);
  };
  const styles = {
    moreButton: ``,
  };
  return (
    <button className={styles.moreButton} onClick={handleMoreButton}>
      Would you like to know more?
    </button>
  );
};

export default MoreButton;
