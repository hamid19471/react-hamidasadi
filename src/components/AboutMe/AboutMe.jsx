import aboutImage from "../../assets/About-Hamidasadi-section.webp";
import { FaAward } from "react-icons/fa";
import Button from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const AboutMe = ({ hidden }) => {
  return (
    <div className="container">
      <div>
        <SectionHeading title="About Me" subTitle="GET TO KNOW" />
      </div>

      <div className="flex flex-col xl:flex-row justify-between items-center gap-10 w-full">
        <div>
          <img src={aboutImage} alt="Hamid Reza Asadi" className="w-full" />
        </div>
        <div className="xl:w-1/2 lg:w-full flex flex-col justify-between gap-[20px]">
          <div className="flex flex-col md:flex-row  justify-between gap-5">
            <div className="flex flex-col bg-secondray py-[30px] px-[50px] rounded-lg items-center hover:bg-secondray/60 duration-300">
              <FaAward className="text-primary text-[30px] mb-[20px]" />
              <h3 className="font-normal tracking-wide text-[18px]">
                EXPERIENCE
              </h3>
              <p className="text-white/80 font-extralight tracking-wider">
                9+ Years Working
              </p>
            </div>
            <div className="flex flex-col bg-secondray py-[30px] px-[50px] rounded-lg items-center hover:bg-secondray/60 duration-300">
              <FaAward className="text-primary text-[30px] mb-[20px]" />
              <h3 className="font-normal tracking-wide text-[18px]">CLIENTS</h3>
              <p className="text-white/80 font-extralight tracking-wider">
                50+ WorldWide
              </p>
            </div>
            <div className="flex flex-col bg-secondray py-[30px] px-[50px] rounded-lg items-center hover:bg-secondray/60 duration-300">
              <FaAward className="text-primary text-[30px] mb-[20px]" />
              <h3 className="font-normal tracking-wide text-[18px]">
                PROJECTS
              </h3>
              <p className="text-white/80 font-extralight tracking-wider">
                200+ completed
              </p>
            </div>
          </div>
          <div>
            <p className="text-white/80 font-light leading-9 text-justify">
              Hi!
              <br /> My name is Hamid who enjoys UI/UX design, website design,
              and development and has more than 9 years of professional
              experience working as a freelancer. I’m a web designer who can
              help you to create or improve the styling of any website for you
              or your company. For me, design is not just doing incredible
              things, it is about solving a problem and being able to
              communicate clearly and easily a solution to meet the needs of a
              user. I love my work, and I am committed to providing my clients
              with an excellent product, I believe that communication is more
              than 50% of the design. It has become the key factor in my success
              as a designer.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-4">
            <Link to="/contact-me">
              <Button name="Free Consultation" primary="primary" />
            </Link>
            <Link to="/about-me">
              <Button name="Read More" hidden={hidden} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
