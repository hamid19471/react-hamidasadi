import { useEffect, useState } from "react";
import PortfoliosCard from "../PortfoliosCard/PortfoliosCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import axios from "axios";
const Portfolios = ({ slice }) => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    const fetchPortf = async () => {
      try {
        const { data } = await axios.get(
          import.meta.env.VITE_API_URL + "/works?populate=*",
          {
            headers: {
              Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
            },
          }
        );
        setPortfolio(data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPortf();
  }, []);
  return (
    <div className="container mt-10">
      <div>
        <SectionHeading title="PORTFOLIOS" subTitle="some of my" />
      </div>
      {slice < 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-36">
          {portfolio.map((item) => (
            <PortfoliosCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-36">
          {portfolio
            .map((item) => <PortfoliosCard item={item} key={item.id} />)
            .slice(0, slice)}
        </div>
      )}
    </div>
  );
};

export default Portfolios;
