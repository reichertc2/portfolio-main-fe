import { user } from "../../../../data/user";
import MainContainer from "@/app/_components/common/MainContainer";
import ContactMe from "@/app/_components/modules/profile/ContactMe";

interface IContactMePageProps {}

const ContactMePage: React.FC<IContactMePageProps> = () => {
  return (
    <MainContainer>
      <ContactMe
        contactInfo={user["contactInfo"]}
        //styling={styling}
      />
    </MainContainer>
  );
};

export default ContactMePage;
