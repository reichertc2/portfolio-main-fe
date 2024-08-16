import { IStyles } from "@/app/_models/styles";
import BasicSectionHeader from "./BasicSectionHeader";

interface IProfileSectionProps {
    id: string;
    title?: string;
    theme: IStyles;
    children: React.ReactNode;
}

export const ProfileSection: React.FC<IProfileSectionProps> = ({ id, title, theme, children }) => {

    const styles = {
        container: `snap-start h-screen flex flex-col justify-center items-center ${theme} w-3/5 m-auto`
    }

    return (
        <section id={id} className={styles.container}>
            {
                title &&
                    <BasicSectionHeader
                        headerTitle={title}
                        theme={theme}
                    /> 
            }

            {children}

        </section>
    )
}

export default ProfileSection;