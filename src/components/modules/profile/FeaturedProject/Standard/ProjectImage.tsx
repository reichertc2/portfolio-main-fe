import Image from "next/image"
import { IImageData } from "@/models/user"

interface IProjectImageProps {
    image: IImageData
}

export const ProjectImage: React.FC<IProjectImageProps> = ({ image }) => {

    const styles = {
        container: "inline-block w-2/5",
        image: 'px-10 rounded-md align-top opacity-40 hover:opacity-90'
    }

    return (

        <div className={styles.container}>

            <Image
                className={styles.image}
                src={image.image}
                alt={image.alt}

            />
        </div>

    )
}


export default ProjectImage;