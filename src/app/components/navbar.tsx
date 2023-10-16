import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="flex justify-center items-center bg-gray-200">
      <div
        className="w-full h-16 border-b-2 border-gray-200  py-10 
        items-center md:px-20 flex justify-start gap-10 px-4 cursor-pointer"
      >
        <FaFacebook size={35}/>
        <FaInstagram size={35} />
        <FaWhatsapp size={35} />
        <FiTwitter size={35} />

        <div className="w-full h-16 flex justify-end py-10 gap-6 items-center md:px-20 px-4">
          <p className="text-sm hover:text-white font-bold text-neutral-900 p-4 bg-gray-50 rounded-md  hover:bg-black cursor-pointer">
            Contact us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
