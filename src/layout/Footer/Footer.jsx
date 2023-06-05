import { Link } from "react-router-dom";
import { menuItems } from "../../FakeAPI/MenuItem";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="w-full bg-primary py-16">
      <div className="container flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt="" className="w-[220px]" />
        </div>
        <div className="flex items-center justify-center my-10 text-black focus:border-none"></div>

        <div className="flex items-center justify-center gap-5">
          {menuItems.map((item) => (
            <span
              className="text-[14px] font-normal text-black uppercase cursor-pointer hover:text-black hover:scale-125 transition duration-300"
              key={item.id}
            >
              <Link to={item.link}>{item.name}</Link>
            </span>
          ))}
        </div>
      </div>
      <hr className="container mt-10 border-t-black"></hr>
      <div className="container mx-auto mt-10 -mb-8 text-center text-black">
        ALL RIGHT RESERVER Ⓒ 2023
      </div>
    </footer>
  );
};

export default Footer;
