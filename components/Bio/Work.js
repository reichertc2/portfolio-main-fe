import BasicSectionHeader from "../common/BasicSectionHeader";
import WorkBasic from "./Work/WorkBasic";
import { genericSectionLayout } from "../../styles/styles";

export default function Work({ projectWorks }) {
  return (
    <section id="WorkSection" className={`${genericSectionLayout()}`}>
      <BasicSectionHeader 
      headerTitle={"Work"} />

      {projectWorks.map((project) => (
        <WorkBasic key={"featuredProject"} project={project} />
      ))}
    </section>
  );
}
