const TestimonialsCard = ({ item }) => {
  return (
    <div className="flex flex-col p-[30px] items-center justify-center bg-secondray border m-3 rounded-lg min-h-[450px]">
      <img
        src={
          import.meta.env.VITE_URL + item.attributes.image.data.attributes.url
        }
        alt={item.attributes.name}
        width={"100px"}
        className="rounded-full border-8 border-white"
      />
      <h1 className="mt-[20px] font-light text-2xl tracking-wider my-[5px]">
        {item.attributes.name}
      </h1>
      <h2 className="font-extralight text-[13px] tracking-widest uppercase">
        {item.attributes.position}
      </h2>
      <p className="font-extralight tracking-wide leading-8 text-white/80 mt-[20px] text-center">
        {item.attributes.comment}
      </p>
    </div>
  );
};

export default TestimonialsCard;
