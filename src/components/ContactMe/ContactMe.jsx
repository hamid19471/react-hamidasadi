import { FaAward } from "react-icons/fa";
import SectionHeading from "../SectionHeading/SectionHeading";
import { CiMail } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
const ContactMe = () => {
    return (
        <div className="container mb-28">
            <SectionHeading title="CONTACT ME" subTitle="GET IN TOUCH" />
            <div className="flex flex-col items-start justify-between gap-5 lg:flex-row">
                <div className="lg:w-[50%] w-full mr-28">
                    <form>
                        <input
                            type="text"
                            name="Full-Name"
                            placeholder="Full name"
                            className="py-[10px] px-[16px] outline-none w-[100%] bg-white/0 border border-primary/70 rounded-lg placeholder:text-[14px] placeholder:text-white/70s font-extralight tracking-wider uppercase"
                        />
                        <div className="flex gap-5 my-5">
                            <input
                                type="text"
                                name="e-main"
                                placeholder="email"
                                className="py-[10px] px-[16px] outline-none w-[100%] bg-white/0 border border-primary/70 rounded-lg placeholder:text-[14px] placeholder:text-white/70s font-extralight tracking-wider uppercase"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="phone number"
                                className="py-[10px] px-[16px] outline-none w-[100%] bg-white/0 border border-primary/70 rounded-lg placeholder:text-[14px] placeholder:text-white/70s font-extralight tracking-wider uppercase"
                            />
                        </div>
                        <textarea
                            id="w3review"
                            name="w3review"
                            placeholder="message"
                            className="py-[10px] px-[16px] outline-none w-[100%] bg-white/0 border border-primary/70 rounded-lg placeholder:text-[14px] placeholder:text-white/70s font-extralight tracking-wider uppercase"
                        />
                        <button className="text-content font-extralight py-2 px-5 rounded-lg duration-300 uppercase tracking-wider bg-primary text-black mt-6 hover:scale-110 ">
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-10 w-full lg:w-[50%]">
                    <div className="w-full flex flex-col bg-secondray py-[30px] px-[30px] rounded-lg items-center hover:bg-secondray/60 duration-300">
                        <CiMail className="text-primary text-[30px] mb-[20px]" />
                        <h3 className="font-normal tracking-wide text-[18px]">
                            E-mail
                        </h3>
                        <p className="text-white/80 font-extralight tracking-wider">
                            info[at]hamidasadi.com
                        </p>
                    </div>
                    <div className="w-full flex flex-col bg-secondray py-[30px] px-[30px] rounded-lg items-center hover:bg-secondray/60 duration-300">
                        <BiSupport className="text-primary text-[30px] mb-[20px]" />
                        <h3 className="font-normal tracking-wide text-[18px]">
                            GET A QUOTE
                        </h3>
                        <p className="text-white/80 font-extralight tracking-wider">
                            get free consultation and quote
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
