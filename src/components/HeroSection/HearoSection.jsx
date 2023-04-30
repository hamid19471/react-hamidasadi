import heroImage from "../../assets/hamidasadi-hero.webp";
import { AiOutlineGithub } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import Button from "../Button/Button";
const HearoSection = () => {
    return (
        <div>
            <div className="container flex flex-col items-center py-[30px] uppercase z-0">
                <div className="flex flex-col text-center gap-[9px]">
                    <p className="text-content font-extralight text-white/90">
                        i'm
                    </p>
                    <p className="text-heading font-bold tracking-tight ">
                        Hamid Reza Asadi
                    </p>
                    <p className="text-[13px] font-extralight text-white/80 tracking-[2px]">
                        Front-end Developer
                    </p>
                    <p className="text-[13px] font-extralight text-white/80 tracking-[2px]">
                        Website Designer | Developer
                    </p>
                    <div>
                        <Button name="GET A QUOTE" path="/" />
                    </div>
                </div>
                <div className="flex w-full container mt-2 relative items-end pb-20 justify-between">
                    <div className="hidden pr-14 md:flex md:flex-col gap-5 text-primary text-[18px]">
                        <AiOutlineGithub className="hover:scale-125 cursor-pointer duration-300" />
                        <FaTelegram className="hover:scale-125 cursor-pointer duration-300" />
                        <BsFacebook className="hover:scale-125 cursor-pointer duration-300" />
                    </div>
                    <img src={heroImage} alt="" className="w-auto mx-auto" />
                    <p className="hidden md:flex text-primary text-[13px] font-extralight md:text-content rotate-90 mb-10 hover:-translate-y-5 duration-300 cursor-pointer">
                        Scroll Down
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HearoSection;
