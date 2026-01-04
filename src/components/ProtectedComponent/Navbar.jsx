import axios from "axios";
import { useEffect, useState } from "react";

export const Navbar = ({onToggle, name}) => {
  const [quote,setQuote] = useState("");
  useEffect(()=>{
    const quoteFunc = async()=>{
      const {data} = await axios.get("https://dummyjson.com/quotes/random");
      setQuote(data);
    }
    quoteFunc();
  },[])
    return (
        <nav className="h-16 bg-white shadow px-6 flex items-center justify-between fixed top-0 inset-x-0 z-50">
            <div className="flex items-center gap-3">
                {/* Hamburger */}
                <button
                    className="text-xl md:hidden hover:cursor-pointer"
                    onClick={onToggle}
                    aria-label="Toggle sidebar"
                >
                    ☰
                </button>

                <img src="/image/logo-Only.png" alt="Logo" className="w-8 h-8" />
                <span className="font-bold text-indigo-600">FinanceYuk</span>
            </div>

            <div className="md:block sm:hidden text-sm italic text-gray-500">
                {quote.quote || ""}
                <p className="text-center italic"><small>{quote.author || ""}</small></p>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium uppercase">{name}</span>
            </div>
        </nav>
    );
};
