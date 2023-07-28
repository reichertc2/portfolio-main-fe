import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { IProjectInfo } from "@/models/user";
import { IStyles } from "@/models/styles";

interface IOtherProjectsStandardViewProps {
  projectWorks: IProjectInfo[];
  styling?: IStyles;
}

export const OtherProjectsStandardView: React.FC<IOtherProjectsStandardViewProps> = ({ projectWorks, styling }) => {
  return (


    <div className="hidden sm:grid inline-grid grid-cols-3 gap-3">
      {projectWorks.map((project, idx) => (
        <div key={project["id"]} className="py-8 col-span-1">
          <div className="inline-block w-full relative ">
            <Image
              className="opacity-40 rounded-md "
              src={project.images[0].image}
              alt={project.images[0].alt}
              width={300}
              height={300}
            />

            <div className="absolute -left-0 -bottom-0 opacity-0 hover:opacity-90 pb-4 pl-1">
              <h3
                className={`text-xl dark:text-stone-900 py-1 font-semibold`}
              >
                {project.title}
              </h3>
              <p
                className={`text-md dark:text-stone-900 py-1 font-semibold`}
              >
                {project.description}
              </p>

              <ul className="">
                {project.urlList.map((url) => (
                  <li
                    key={url.name}
                    className={`inline-block px-2 dark:text-stone-900`}
                  >
                    <Link href={url.url}>
                      <span>
                        <FontAwesomeIcon
                          className="text-2xl"
                          icon={url.icon}
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
}

export default OtherProjectsStandardView;