import React from "react";
import ButtonGeneric from "@/app/_components/common/buttons/ButtonGeneric";

interface IActionButtonContainerProps {
}

export const ActionButtonContainer: React.FC<IActionButtonContainerProps> = ({}) => {
    const styles = {
        container: `my-6`
    }
    return (
        <div className={`${styles.container} `}>
            <ButtonGeneric
                text={"View Projects ->"}
                url={"/Projects"}
                isPrimary={true}
                download={false}
            />
            <ButtonGeneric
                text={"Download Resume"}
                url={"/Resume.pdf"}
                isPrimary={false}
                download={`Resume.pdf`}
            />
        </div>
    );
};

export default ActionButtonContainer;
