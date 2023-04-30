const SectionHeading = ({ title, subTitle }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center uppercase my-[120px]">
                <p className="text-contet font-extralight tracking-wide">
                    {subTitle}
                </p>
                <h3 className="text-heading text-primary font-bold tracking-wider">
                    {title}
                </h3>
            </div>
        </>
    );
};

export default SectionHeading;
