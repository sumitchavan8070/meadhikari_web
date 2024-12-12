"use client";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import Mobile from "./Mobile";
import { useContext, useEffect, useState } from "react";
// import SideCart from "./SideCart";
import { Context } from "@/Context/Context";
import Image from 'next/image';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { user, handleLogout } = useContext(Context);
  const [categories, setCategories] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const name = user?.data?.name.replace(/ .*/, "");

  useEffect(() => {
    const fetchCategories = async () => {
      // const res = await axios.get("/api/category");
      // setCategories(res?.data?.data);

      const categoriesList = ["Kids", "Men", "Women"];
      setCategories(categoriesList);


    };
    fetchCategories();
  }, []);


  const sendWhatsAppMessage = () => {
    const phoneNumber = "+918862071189"; // Replace with your WhatsApp number
    const message = encodeURIComponent("Hello! I would like to get in touch.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank"); // Opens in a new tab
  };





  return (
    <div className="pt-3">
      <div className="w-full 2xl:w-[1250px] mx-px lg:mx-auto py-5 md:px-24 px-8 2xl:px-0 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="font-bold font-Arvo text-[#02073E] text-3xl md:text-[20px] lg:text-[20px] xl:text-[30px] md:leading-snug leading-tight">Meadhikari</h1>
          {/* <div className="logo">
                <a href="#"><img src="/logo.png" alt="logo"/></a>
            </div> */}
          <div className="text-[#02073E] hidden lg:block ml-12">
            <a href="/#" className="pr-8 hover:text-[#56BBD0] transition duration-200">Home</a>

            <Link
              className="text-gray-800 transition pr-8 hover:text-[#56BBD0] "
              href="/about">
              About us
            </Link>
            <Link
              className="text-gray-800 transition pr-8 hover:text-[#56BBD0] "
              href="/pricing">
              Pricing
            </Link>
            <Link
              className="text-gray-800 transition pr-8 hover:text-[#56BBD0]"
              href="/contact">
              Contact us
            </Link>

          </div>
        </div>
        <a onClick={sendWhatsAppMessage}>
          <Image src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg" alt="image" width={120} height={50} />
        </a>

        <button className="block lg:hidden">

          {/* <ViewListIcon className="w-5" /> */}
        </button>
      </div>

    </div>
  );
};

export default Header;
