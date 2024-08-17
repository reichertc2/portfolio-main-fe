import ProfileMain from "@/app/_components/modules/profile/ProfileMain";
import { user } from "../../data/user";
import { theme } from "../../data/theme";

export default function Home() {
  return <ProfileMain profileMain={user} theme={theme} />;
}
