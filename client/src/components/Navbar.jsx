import { navlinks } from "../constants/navlinks";
import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { Fa500Px, FaBars } from "react-icons/fa";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <nav className="w-full flex justify-center bg-black p-5 items-center">
                <div className="container flex justify-around max-md:justify-between max-md:mx-6">
                    <div className=" flex justify-center items-center cursor-pointer">
                        <Fa500Px color="#fff" className="w-10 h-10" />
                        <span className="text-white font-semibold pl-2 max-md:hidden">
                            Winda
                        </span>
                    </div>
                    <div className="flex justify-center max-md:hidden items-center gap-x-12">
                        {navlinks.map((item) => {
                            return (
                                <h4
                                    key={item.label}
                                    className="flex justify-center items-center text-white"
                                >
                                    {item.label}
                                </h4>
                            );
                        })}
                    </div>
                    <div className="font-semibold flex w-1/12 justify-center bg-teal-400 p-3 rounded-full text-white max-md:hidden cursor-pointer">
                        Login
                    </div>

                    <div className="flex justify-center items-center md:hidden">
                        {!toggleMenu ? (
                            <p
                                className="cursor-pointer text-white"
                                onClick={() => setToggleMenu(!toggleMenu)}
                            >
                                <FaBars className="w-10 h-10" />
                            </p>
                        ) : (
                            <p
                                className="cursor-pointer text-white"
                                onClick={() => setToggleMenu(!toggleMenu)}
                            >
                                <AiOutlineClose className="w-10 h-10" />
                            </p>
                        )}
                    </div>
                </div>
            </nav>

            {/* Show for mobile */}
            {toggleMenu && (
                <div className="w-2/12 fixed h-screen shadow-slate-50 shadow-xl md:hidden">
                    {navlinks.map((item) => {
                        return (
                            <h4
                                key={item.label}
                                className="py-4 flex justify-center items-center w-full cursor-pointer hover:bg-red-300 hover:text-gray-900 text-white"
                            >
                                {item.label}
                            </h4>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Navbar;
