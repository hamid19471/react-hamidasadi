import { useEffect, useState } from "react";
import PortfoliosCard from "../PortfoliosCard/PortfoliosCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import axios from "axios";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const Portfolios = ({ slice }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
        setPortfolio(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPortf();
  }, [loading]);
  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container mt-10">
      <div>
        <SectionHeading title="PORTFOLIOS" subTitle="some of my" />
      </div>
      {slice < 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {portfolio &&
            portfolio.map((item) => (
              <>
                <PortfoliosCard item={item} key={item.id} />
              </>
            ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {portfolio &&
              portfolio
                .map((item) => (
                  <>
                    <PortfoliosCard item={item} key={item.id} />
                  </>
                ))
                .slice(0, slice)}
          </div>
        </>
      )}
      <div className="flex items-center justify-center w-full mb-36">
        <Link to="/portfolios">
          <Button name="View All" primary="primary" />
        </Link>
      </div>
    </div>
  );
};

export default Portfolios;
