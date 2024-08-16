import { IProjectInfo } from "@/app/_models/user";
import { IStyles } from "@/app/_models/styles";
import ProfileSection from "@/app/_components/common/ProfileSection";
import OtherProjectsMobileView from "./OtherProjects/OtherProjectsMobileView";
import OtherProjectsStandardView from "./OtherProjects/OtherProjectsStandardView";

interface IOtherProjectsProps {
  projectWorks: IProjectInfo[];
  styling?: IStyles;
}

export const OtherProjects: React.FC<IOtherProjectsProps> = ({ projectWorks, styling }) => {
  return (
    <ProfileSection
      id={"WorkSection"}
      title={"Other Projects"}
      styling={styling}
    >

      <OtherProjectsStandardView
        projectWorks={projectWorks}
        styling={styling}
      />
      {/* TODO Mobile */}
      <OtherProjectsMobileView
        projectWorks={projectWorks}
        styling={styling}
      />

    </ProfileSection>
  );
}

export default OtherProjects;