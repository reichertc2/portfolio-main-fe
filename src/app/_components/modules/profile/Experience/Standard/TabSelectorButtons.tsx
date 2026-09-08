import React from "react";
import { IJobInfo } from "@/app/_models/user";

interface ITabSelectorButtonsProps {
  jobExperience: IJobInfo[];
  companyInBodyId: string;
  openExperience: (item: string) => void;
}

export const TabSelectorButtons: React.FC<ITabSelectorButtonsProps> = ({
  jobExperience,
  openExperience,
  companyInBodyId,
}) => {
  const styles = {
    tabContainer: "w-1/5 inline-block pl-4",
    genericTab:`my-1 block pl-4 py-3 border  rounded-l-md dark:text-text text-xs text-left w-full`,
    selectedTab:`text-text`
  };

  const isSelectedButton = (companyId: string) => {
    if (companyInBodyId === companyId) return true;
    else false;
  };

  return (
    <div id="tab" className={styles.tabContainer}>
      {jobExperience.map((comp) => (
        <button
          key={comp["id"]}
          onClick={() => openExperience(comp.id)}
          className={`${styles.genericTab} ${
            isSelectedButton(comp["id"]) && styles.selectedTab
          }`}
        >
          {comp["CompanyName"]}
        </button>
      ))}
    </div>
  );
};

export default TabSelectorButtons;
