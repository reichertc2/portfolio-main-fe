import BasicSectionHeader from "../common/BasicSectionHeader";
import WorkBasic from "./Work/WorkBasic";


export default function Work({ projectWorks }) {
  return (
    <section id="WorkSection" className="py-24 w-4/5 pl-8">
      <BasicSectionHeader 
      headerTitle={"Work"} />

      {projectWorks.map((project) => (
        <WorkBasic key={"featuredProject"} project={project} />
      ))}
    </section>
  );
}
