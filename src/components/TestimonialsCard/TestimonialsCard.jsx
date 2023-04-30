const TestimonialsCard = ({ image, name, title, comment }) => {
    return (
        <div className="flex flex-col p-[30px] items-center justify-center bg-secondray border m-3 rounded-lg min-h-[450px]">
            <img
                src={image}
                alt={name}
                width={"100px"}
                className="rounded-full border-8 border-white"
            />
            <h1 className="mt-[20px] font-light text-2xl tracking-wider my-[5px]">
                {name}
            </h1>
            <h2 className="font-extralight text-[13px] tracking-widest uppercase">
                {title}
            </h2>
            <p className="font-extralight tracking-wide leading-8 text-white/80 mt-[20px] text-center">
                {comment}
            </p>
        </div>
    );
};

export default TestimonialsCard;
