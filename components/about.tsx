import Image from "next/image";
import topWave from "../public/top-wave-scaless.svg";
import botWave from "../public/bot-wave-scaless.svg";
import SectionContainer from "../ui/sectionContainer";

const About = () => {
  return (
    <SectionContainer
      sectionClasses="text-left bg-[#01725C] relative my-10 md:my-0"
      sectionName="about"
      isFullWidth
    >
      <Image
        src={topWave}
        alt="Test test test"
        style={{
          width: "100%",
          position: "absolute",
          bottom: "100%",
          left: 0,
        }}
      />
      <Image
        src={botWave}
        alt="Test test test"
        style={{
          width: "100%",
          position: "absolute",
          top: "100%",
          left: 0,
        }}
      />
      <div className="text-center mb-8">
        <h1>Test</h1>
        <h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus dignissimos voluptate incidunt, reiciendis aliquid
          architecto, est excepturi expedita odit, nesciunt ea rerum harum
          consequuntur sapiente perspiciatis. Quisquam doloribus molestiae
          rerum.
        </h2>
      </div>
      <div className="flex flex-col my-4 h-96 gap-y-10 gap-x-4"></div>
    </SectionContainer>
  );
};

export default About;
