import React from "react";
import {IContactInfo} from "@/app/_models/user";
import CallToActionHeader from "@/app/_features/profile/ContactMe/Standard/CallToActionHeader";
import CallToActionSocials from "@/app/_features/profile/ContactMe/Standard/CallToActionSocials";
import ButtonGeneric from "@/app/_components/common/buttons/ButtonGeneric";

interface ICallToActionContainerProps {
    contactInfo: IContactInfo;
}

export const CallToActionContainer: React.FC<ICallToActionContainerProps> = ({
                                                                                 contactInfo,
                                                                             }) => {
    const styles = {
        container: "hidden sm:block inline-block w-full",
        buttons: `flex items-center justify-left px-6 pb-6`,
    };

    return (
        <div className={styles.container}>
            <CallToActionHeader contactInfo={contactInfo}/>
            <CallToActionSocials contactInfo={contactInfo}/>
            <div className={styles.buttons}>
                <ButtonGeneric
                    text={"Download Resume"}
                    url={"/Resume.pdf"}
                    isPrimary={true}
                    download={`Resume.pdf`}
                />
            </div>
        </div>
    );
};

export default CallToActionContainer;
