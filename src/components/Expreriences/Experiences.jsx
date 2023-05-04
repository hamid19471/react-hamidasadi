import SectionHeading from "../SectionHeading/SectionHeading";
import SingleExperience from "../SingleExperience/SingleExperience";

const Experiences = () => {
  return (
    <div className="container ">
      <SectionHeading title="MY EXPERIENCES" subTitle="WHAT SKILLS I HAVE" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 p-14 bg-secondray items-center justify-between lg:pl-32 lg:py-24 rounded-2xl">
        <SingleExperience name="html" description="EXPERIENCED" />
        <SingleExperience name="css" description="EXPERIENCED" />
        <SingleExperience
          name="wordpress development "
          description="EXPERIENCED"
        />
        <SingleExperience name="php" description="MID-LEVEL" />
        <SingleExperience name="javascript" description="EXPERIENCED" />
        <SingleExperience name="Tailwind" description="EXPERIENCED" />
        <SingleExperience name="Seo" description="EXPERIENCED" />
        <SingleExperience name="mysql" description="mid-level" />
        <SingleExperience name="ui | ux" description="EXPERIENCED" />
        <SingleExperience name="react" description="mid-level" />
        <SingleExperience name="redux" description="mid-level" />
        <SingleExperience name="next js" description="mid-level" />
      </div>
    </div>
  );
};

export default Experiences;
