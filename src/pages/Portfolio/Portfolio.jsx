import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Layout from "../../layout";
import Portfolios from "../../components/Portfolios/Portfolios";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="container flex flex-col h-[90vh] justify-center items-center py-[30px] uppercase z-0">
        <div className="flex flex-col text-center">
          <p className="text-[19px] font-extralight text-white/90">MY</p>
          <p className="text-[45px] font-normal -mt-2 ">Portfolio</p>
          <p className="text-[13px] font-extralight text-white/80 py-1 tracking-[2px]">
            Front-end Developer
          </p>
          <p className="text-[13px] font-extralight text-white/80 tracking-[2px]">
            Website Designer | Developer
          </p>
          <div className=" flex gap-5 mt-10">
            <Button
              name="contact me"
              onClick={() => navigate("/contact-me")}
              primary="primary"
            />
            <Button name="About me" onClick={() => navigate("/about-me")} />
          </div>
        </div>
      </div>
      <div>
        <Portfolios />
      </div>
    </Layout>
  );
};

export default Portfolio;
