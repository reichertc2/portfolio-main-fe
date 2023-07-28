import { IStyles } from "@/models/styles";
import BasicSectionHeader from "./BasicSectionHeader";

interface IProfileSectionProps {
    id: string;
    title: string;
    styling?: IStyles;
    children: React.ReactNode;
}

export const ProfileSection: React.FC<IProfileSectionProps> = ({ id, title, styling, children }) => {

    const styles = {
        container: `flex flex-col`
    }

    return (
        <section id={id} className={styles.container}>
            <BasicSectionHeader
                headerTitle={title}
                styles={styling}
            />
            {children}

        </section>
    )
}

export default ProfileSection;