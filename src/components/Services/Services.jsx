import SectionHeading from "../SectionHeading/SectionHeading";
import SingleService from "../SingleServices/SingleService";
import { ImPencil2 } from "react-icons/im";
import { BsCodeSlash } from "react-icons/bs";
import { GiChart } from "react-icons/gi";
const Services = () => {
    return (
        <div className="container">
            <div>
                <SectionHeading title="SERVICES" subTitle="WHAT I PROVIDE" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 ">
                <SingleService
                    title="UI / UX DESIGNE"
                    description="I believe that communication is 50% of the design. It has become the key factor in my success as a designer. My products are minimalist yet visually striking, designed to tell a story and showcase the talents of my clients. In a competitive market, it is often the smaller details and visual touches that take your online space to the next level. All my products are designed with impeccable attention to detail and a timeless artistic flair.
"
                    icon={<ImPencil2 />}
                />
                <SingleService
                    title="WEB DEVELOPMENT"
                    description="Development of your desired website based on your needs and business along with custom design of your website based on WordPress cms or dedicated cms of my services. After a thorough review of your business and initial needs assessments, after submitting a custom design and turning the design into a website, your other needs for launching a corporate, store or personal website, other modules for your site will be produced and provided to you. Will take."
                    icon={<BsCodeSlash />}
                />
                <SingleService
                    title="SEO"
                    description="Today, most needs are met in the Internet and Internet search, and your presence in the initial results, as well as the specific path for your customers on the website can help you sell more products and services. If you need to be seen more and surpass your competitors on the Internet, my SEO and digital marketing services can help you, in addition to surpassing competitors, increase sales of your products and services."
                    icon={<GiChart />}
                />
            </div>
        </div>
    );
};

export default Services;
