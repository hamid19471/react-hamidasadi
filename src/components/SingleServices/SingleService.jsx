const SingleService = ({ title, description, icon }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-secondray p-7 hover:-translate-y-4 rounded-xl m-2 border-b-4 duration-300 border-b-pink-600">
            <div className="text-[60px] bg-primary p-6 overflow-visible rounded-full">
                {icon}
            </div>
            <div className="font-bold text-heading mt-8 mb-4">{title}</div>
            <div className="text-white/80  text-[17px] leading-8 font-light tracking-wide text-center">
                {description}
            </div>
        </div>
    );
};

export default SingleService;
