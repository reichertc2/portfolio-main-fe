"use client";

import React, { useState } from "react";
import { IJobInfo } from "@/app/_models/user";
import TabSelectorButtons from "./TabSelectorButtons";
import TabSelectorBody from "./TabSelectorBody";

interface ITabSelectorProps {
  jobExperience: IJobInfo[];
}

export const TabSelector: React.FC<ITabSelectorProps> = ({
  jobExperience,
}) => {
  const [displayedCompany, setDisplayedCompany] = useState<IJobInfo>(
    jobExperience[0]
  );

  const styles = {
    container: "inline-block w-full p-1",
  };

  const openExperience = (id = "exp-1") => {
    let company = jobExperience.filter((comp) => comp["id"] === id);
    let fallBackJobInfo: IJobInfo = {
      id: "unk01",
      CompanyName: "Unknown",
      Position: "Unknown",
      CompanyURL: "",
      Tenure: "",
      BulletPoints: []
    }
    setDisplayedCompany(company[0] ?? fallBackJobInfo);
  };
 
  return (
    <div id="ExperienceTabs" className={styles.container}>
      <TabSelectorButtons
        jobExperience={jobExperience}
        openExperience={openExperience}
        companyInBodyId={displayedCompany.id}
      />

      <TabSelectorBody displayedCompany={displayedCompany} />
    </div>
  );
};

export default TabSelector;
