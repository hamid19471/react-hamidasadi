import Layout from "../../layout";
import { Link, useParams } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import axios from "axios";
import { BsGear } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { HiOutlineClock } from "react-icons/hi";
import { BsCheck2Circle } from "react-icons/bs";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

const SinglePortfolio = () => {
  const { id } = useParams();
  const [single, setSingle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingle = async () => {
      try {
        const { data } = await axios.get(
          import.meta.env.VITE_API_URL + `/works/${id}?populate=*`,
          {
            headers: {
              Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
            },
          }
        );
        setLoading(false);
        setSingle(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingle();
  }, [id, loading]);

  if (loading)
    return (
      <div className="container">
        <Loading />
      </div>
    );

  return (
    <Layout>
      <div className="container my-40 w-full">
        <div className="flex flex-col md:flex-row gap-11">
          <div className="flex flex-col bg-secondray/50 h-fit md:w-[50%] lg:w-[30%] px-10 border border-primary/80 rounded-lg items-start justify-start pt-14">
            {!loading ? (
              <img
                src={
                  import.meta.env.VITE_URL +
                  single.attributes.logo.data.attributes.url
                }
                alt={single.attributes.companyName}
                className="mx-auto mb-24"
              />
            ) : (
              <p>Loading</p>
            )}
            <div className="flex flex-col gap-4 ml-4 items-start">
              <div className="flex items-center justify-center uppercase gap-2">
                <BsGear size={19} className="text-primary" />
                <h3 className="font-semibold text-[20px]">
                  project name:{" "}
                  <span className="font-light text-[20px]">
                    {single.attributes.companyName}
                  </span>
                </h3>
              </div>
              <div className="flex items-center justify-center uppercase gap-2">
                <FaUserTie size={19} className="text-primary" />
                <h3 className="font-semibold text-[20px]">
                  owner:{" "}
                  <span className="font-light text-[20px]">
                    {single.attributes.owner}
                  </span>
                </h3>
              </div>
              <div className="flex items-center justify-center uppercase gap-2">
                <IoIosLink size={19} className="text-primary" />
                <h3 className="font-semibold text-[20px]">
                  address:{" "}
                  <span className="font-light text-[20px]">
                    <Link to="">{single.attributes.websiteAddress}</Link>
                  </span>
                </h3>
              </div>
              <div className="flex items-center justify-center uppercase gap-2">
                <HiOutlineClock size={19} className="text-primary" />
                <h3 className="font-semibold text-[20px]">
                  Duration:{" "}
                  <span className="font-light text-[20px]">
                    {single.attributes.duration}
                  </span>
                </h3>
              </div>
              <hr className="my-[50px] border-primary border-[1px] w-full" />
              <div>
                <div className="uppercase">
                  <span className="font-light text-contet">Services</span>
                  <h1 className="font-semibold text-primary text-heading">
                    Provided
                  </h1>
                </div>
                {single.attributes.services.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start uppercase gap-2 mt-3 "
                  >
                    <BsCheck2Circle size={19} className="text-primary" />
                    <h3 className="font-semibold text-[20px]">
                      <span className="font-light text-[20px]">{item}</span>
                    </h3>
                  </div>
                ))}
              </div>
              <hr className="my-[50px] border-primary border-[1px] w-full" />
              <div className="uppercase">
                <span className="font-light text-contet">Technology</span>
                <h1 className="font-semibold text-primary text-heading">
                  used
                </h1>
              </div>
              <div className="mb-20">
                {single.attributes.technologyUsed.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start uppercase gap-2 mt-3"
                  >
                    <BsCheck2Circle size={19} className="text-primary" />
                    <h3 className="font-semibold text-[20px]">
                      <span className="font-light text-[20px]">{item}</span>
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-[50%] lg:w-[70%]">
            <div className="text-center p-3 border border-primary/80 rounded-lg items-center justify-center py-14">
              <span className="text-[20px] font-light tracking-wide uppercase">
                About
              </span>
              <h1 className="text-primary font-bold uppercase text-[30px] mb-10">
                {single.attributes.companyName}
              </h1>
              <p className="px-[40px] text-justify text-[18px] font-light leading-8">
                {single.attributes.AboutCompany}
              </p>
            </div>
            <div>
              <SectionHeading title="snapshot" subTitle="project" />
            </div>
            <div className="text-center px-16 border bg-secondray/50 border-primary/80 rounded-lg items-center justify-center py-14">
              <img
                src={
                  import.meta.env.VITE_URL +
                  single.attributes.mainImage.data.attributes.url
                }
                alt=""
              />
              <hr className="my-[50px] border-primary border-[1px]" />
              <img
                src={
                  import.meta.env.VITE_URL +
                  single.attributes.fullImage.data.attributes.url
                }
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SinglePortfolio;
