import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import BasicSectionHeader from "../../default/common/BasicSectionHeader";
import { baseDarkText } from "../../../styles/colors";
import { genericSectionLayout } from "../../../styles/styles";

export default function SubWork({ projectWorks }) {
  return (
    <section id="WorkSection" className={`${genericSectionLayout}`}>
      <BasicSectionHeader headerTitle={"Other Projects"} />
      <div className="inline-grid grid-cols-3 gap-3">
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
                  className={`text-xl dark:${baseDarkText} py-1 font-semibold`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-md dark:${baseDarkText} py-1 font-semibold`}
                >
                  {project.description}
                </p>

                <ul className="">
                  {project.urlList.map((url) => (
                    <li
                      key={url.name}
                      className={`inline-block px-2 dark:${baseDarkText}`}
                    >
                      <Link href={url.url}>
                        <a>
                          <FontAwesomeIcon
                            className="text-2xl"
                            icon={url.icon}
                          />
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}