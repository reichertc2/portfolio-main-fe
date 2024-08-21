import React from "react";
import { IJobInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";

interface ITabSelectorButtonsProps {
  jobExperience: IJobInfo[];
  styling?: IStyles;
  companyInBodyId: string;
  openExperience: (item: string) => void;
}

export const TabSelectorButtons: React.FC<ITabSelectorButtonsProps> = ({
  jobExperience,
  styling,
  openExperience,
  companyInBodyId,
}) => {
  const styles = {
    tabContainer: "w-1/5 inline-block pl-4",
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
          className={`my-1 block pl-4 py-3 border border-slate-600 rounded-l-md dark:text-stone-100 text-xs text-left w-full ${
            isSelectedButton(comp["id"]) && `text-slate-200 bg-stone-800 dark:text-stone-800 dark:bg-slate-200`
          }`}
        >
          {comp["CompanyName"]}
        </button>
      ))}
    </div>
  );
};

export default TabSelectorButtons;
