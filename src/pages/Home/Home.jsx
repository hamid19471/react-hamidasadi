import { lazy } from "react";
const Layout = lazy(() => import("../../layout"));
const AboutMe = lazy(() => import("../../components/AboutMe/AboutMe"));
const Clients = lazy(() => import("../../components/Clients/Clients"));
const ContactMe = lazy(() => import("../../components/ContactMe/ContactMe"));
const Experiences = lazy(() =>
  import("../../components/Expreriences/Experiences")
);
const HearoSection = lazy(() =>
  import("../../components/HeroSection/HearoSection")
);
const Portfolios = lazy(() => import("../../components/Portfolios/Portfolios"));
const Services = lazy(() => import("../../components/Services/Services"));
const Testimonial = lazy(() =>
  import("../../components/Testimonial/Testimonial")
);

const Home = () => {
  return (
    <Layout>
      <HearoSection />
      <AboutMe />
      <Clients />
      <Experiences />
      <Services />
      <Portfolios slice={3} />
      <Testimonial />
      <ContactMe />
    </Layout>
  );
};

export default Home;
