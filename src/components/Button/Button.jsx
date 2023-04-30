import { useNavigate } from "react-router-dom";


const Button = ({ name, path, primary }) => {
    const navigate = useNavigate();
    const handleCliclButton = () => {
        navigate(`${path}`);
    };
    return (
        <button
            className={` text-content font-extralight py-2 px-5 rounded-lg duration-300 uppercase tracking-wider ${primary
                ? "bg-primary text-black hover:scale-110"
                : "border border-primary text-white hover:bg-primary hover:scale-110 hover:text-black"
                } `}
            onClick={handleCliclButton}
        >
            {name}
        </button>
    );
};

export default Button;
