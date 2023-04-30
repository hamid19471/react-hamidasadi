import { BsCheck2Circle } from "react-icons/bs";

const SingleExperience = ({ name, description }) => {
    return (
        <div className="flex items-start justify-start gap-2 uppercase">
            <div>
                <BsCheck2Circle className="text-[20px] font-bold text-primary" />
            </div>
            <div>
                <h3 className="text-[20px] -mt-1">{name}</h3>
                <p className=" font-extralight tracking-wider text-[15px] text-white/80">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SingleExperience;
