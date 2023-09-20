import ProfileSection from "@/components/common/ProfileSection";
import { user } from "../../../data/user"
import ProjectTile from "@/components/modules/profile/OtherProjects/Standard/ProjectTile";


export default function Home() {

  return (

    <ProfileSection
      id={"stylingComponent"}
      title={"Styling Component"}
    >
      <ProjectTile
        key={user.subprojects[0]["id"]}
        project={user.subprojects[0]}
      />
    </ProfileSection>
  )
}

