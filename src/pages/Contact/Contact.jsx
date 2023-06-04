import ContactMe from "../../components/ContactMe/ContactMe";
import Layout from "../../layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container flex flex-col h-[90vh] justify-center items-center py-[30px] uppercase z-0">
        <div className="flex flex-col text-center">
          <p className="text-[19px] font-extralight text-white/90">
            Contact me
          </p>
          <p className="text-[40px] font-normal tracking-widest -mt-2 ">
            Get in touch
          </p>
          <p className="text-[13px] font-extralight text-white/80 py-1 tracking-[2px]">
            website designe and development
          </p>
          <p className="text-[13px] font-extralight text-white/80 tracking-[2px]">
            services
          </p>
        </div>
      </div>
      <ContactMe />
    </Layout>
  );
};

export default Contact;
