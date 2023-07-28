import ProfileMain from "@/components/modules/profile/ProfileMain";
import { user } from "../../data/user"



export default function Home() {

  return (
    <ProfileMain profileMain={user} />

  )
}

