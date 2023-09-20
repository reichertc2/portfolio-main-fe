import Image from "next/image";
import { IProjectInfo } from "@/models/user";
import { IStyles } from "@/models/styles";
import ProjectTileInfo from "./ProjectTileInfo";

interface IProjectTileProps {
  project: IProjectInfo;
  styling?: IStyles;
}

export const ProjectTile: React.FC<IProjectTileProps> = ({ project, styling }) => {

  const styles = {
    container: "py-0 min-w-[25%] min-h-[30%] py-8 col-span-1 ",
    subContainer: "block w-full relative ",
    image: "opacity-40 rounded-md ",
  }
  return (

    <div className={styles.container}>
      <div className={styles.subContainer}>

        <Image
          className={styles.image}
          src={project.images[0].image}
          alt={project.images[0].alt}
          width={300}
          height={300}
        />

        <ProjectTileInfo
          project={project}
        />

      </div>
    </div>

  );
}

export default ProjectTile;