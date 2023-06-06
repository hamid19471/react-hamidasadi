import AboutMe from "../../components/AboutMe/AboutMe";
import Button from "../../components/Button/Button";
import Clients from "../../components/Clients/Clients";
import ContactMe from "../../components/ContactMe/ContactMe";
import Testimonial from "../../components/Testimonial/Testimonial";
import Layout from "../../layout";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Layout>
      <div className="container flex flex-col h-[90vh] justify-center items-center py-[30px] uppercase z-0">
        <div className="flex flex-col text-center">
          <p className="text-[19px] font-extralight text-white/90">
            MY NAME IS
          </p>
          <p className="text-[40px] font-normal tracking-widest -mt-2 ">
            Hamid Reza Asadi
          </p>
          <p className="text-[13px] font-extralight text-white/80 py-1 tracking-[2px]">
            Front-end Developer
          </p>
          <p className="text-[13px] font-extralight text-white/80 tracking-[2px]">
            Website Designer | Developer
          </p>
          <div className="mt-10">
            <Link
              to={import.meta.env.VITE_URL + "/uploads/CV_ed3a1d12e9.pdf"}
              rel="noreferrer"
              target={"_blank"}
            >
              <Button name="Download CV" path="" />
            </Link>
          </div>
        </div>
      </div>
      <AboutMe hidden="hidden" />
      <Clients />
      <Testimonial />
      <ContactMe />
    </Layout>
  );
};

export default About;
