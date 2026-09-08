import React from "react";

interface IUnderConstructionProps {}

export const UnderConstruction: React.FC<IUnderConstructionProps> = () => {
  return (
    <>
      <h1 className="dark:text-text-dark">
        Under Construction. Come Back Soon!!
      </h1>
    </>
  );
};

export default UnderConstruction;
