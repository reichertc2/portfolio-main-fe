import ProfileMain from "@/components/modules/profile/ProfileMain";
import { user } from "../../data/user"

interface IProfileHomeProps { }


export const ProfileHome: React.FC<IProfileHomeProps> = () => {

  return (
    <ProfileMain profileMain={user} />

  )
}

export default ProfileHome;