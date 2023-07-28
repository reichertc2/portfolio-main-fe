import { IStyles } from "@/models/styles";
import BasicSectionHeader from "./BasicSectionHeader";

interface IProfileSectionProps {
    id: string;
    title?: string;
    styling?: IStyles;
    children: React.ReactNode;
}

export const ProfileSection: React.FC<IProfileSectionProps> = ({ id, title, styling, children }) => {

    const styles = {
        container: `snap-start h-screen flex flex-col justify-center items-center ${styling} w-3/5 m-auto`
    }

    return (
        <section id={id} className={styles.container}>

            {
                title ?
                    <BasicSectionHeader
                        headerTitle={title}
                        styles={styling}
                    /> : ""
            }

            {children}

        </section>
    )
}

export default ProfileSection;