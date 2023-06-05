const Button = ({ name, onClick, primary, hidden }) => {
  return (
    <button
      className={` text-content font-extralight py-2 px-5 rounded-lg duration-300 uppercase tracking-wider ${
        primary
          ? "bg-primary text-black hover:scale-110"
          : "border border-primary text-white hover:bg-primary hover:scale-110 hover:text-black"
      } ${hidden ? "hidden" : ""} `}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
