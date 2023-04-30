import { menuItems } from "../../FakeAPI/MenuItem";
import logo from "../../assets/logo.png";
import { HomeIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { FolderIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <header className="z-10">
            <div className="hidden container h-[75px] md:flex items-center justify-between py-[10px]">
                <ul className="flex items-center justify-between gap-2">
                    {menuItems.map((item) => (
                        <>
                            <NavLink
                                to={item.link}
                                key={item.id}
                                className={`flex items-center justify-between font-normal uppercase md:text-[14px] lg:text-[12px] py-[13px] px-[20px] cursor-pointer hover:text-primary hover:scale-125 transition duration-300`}
                            >
                                {item.name}
                            </NavLink>
                            <span
                                key={item.name}
                                className="items-center justify-center font-light last:hidden"
                            >
                                |
                            </span>
                        </>
                    ))}
                </ul>
                <div>
                    <img src={logo} alt="hamid asadi" className="w-[188px]" />
                </div>
            </div>
            <div className="fixed w-[400px] py-3  -translate-x-1/2 mobileMenu bottom-4 left-1/2 md:hidden z-50">
                <div className="relative flex items-center justify-between text-primary text-[12px]">
                    <div className="flex flex-col items-center justify-center">
                        <HomeIcon className="w-7 h-7" />
                        <p>Home</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <UserIcon className="w-7 h-7" />
                        <p>About</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <FolderIcon className="w-7 h-7" />
                        <p>works</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <PhoneIcon className="w-7 h-7" />
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
