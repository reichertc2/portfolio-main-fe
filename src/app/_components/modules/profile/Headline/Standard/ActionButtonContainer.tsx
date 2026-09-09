import React from "react";
import ButtonGeneric from "@/app/_components/common/buttons/ButtonGeneric";

interface IActionButtonContainerProps {
}

export const ActionButtonContainer: React.FC<IActionButtonContainerProps> = ({}) => {
    const styles = {
        container: `flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto`,

    };

    return (
        <div>
            <ButtonGeneric
                text={"View Projects ->"}
                url={"/Projects"}
                urlText={""}
                isPrimary={true}
                download={false}
            />
            <ButtonGeneric
                text={"Download Resume"}
                url={"/Resume.pdf"}
                urlText={""}
                isPrimary={false}
                download={`Resume.pdf`}
            />
        </div>
    );
};

export default ActionButtonContainer;
