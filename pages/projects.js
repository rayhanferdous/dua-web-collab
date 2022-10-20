import Master from "../components/Layout/Master";
import Projects from "../components/Setting/Projects/Projects";

const Project = () => {
  return (
    <Master>
      <div className="scrl h-[calc(100vh_-_100px)] pb-16 md:pb-12 md:pt-24 lg:pt-24 2xl:pb-28 3xl:pb-32">
        <Projects />
      </div>
    </Master>
  );
};

export default Project;
