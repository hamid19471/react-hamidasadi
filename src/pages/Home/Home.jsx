import Layout from "../../layout";
import AboutMe from "../../components/AboutMe/AboutMe";
import Clients from "../../components/Clients/Clients";
import ContactMe from "../../components/ContactMe/ContactMe";
import Experiences from "../../components/Expreriences/Experiences";
import HearoSection from "../../components/HeroSection/HearoSection";
import Portfolios from "../../components/Portfolios/Portfolios";
import Services from "../../components/Services/Services";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <Layout>
      <HearoSection />
      <AboutMe />
      <Clients />
      <Experiences />
      <Services />
      <Portfolios slice={6} />
      <Testimonial />
      <ContactMe />
    </Layout>
  );
};

export default Home;
