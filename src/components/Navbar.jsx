import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logoVR.png";

export default function Navbar() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  function toggleNavbar() {
    setHamburgerMenu(!hamburgerMenu);
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center flex-shrink-0">
          <div className="flex items-center ">
            <a href="/" className="flex justify-center items-center">
              <img src={Logo} alt="" className="h-10 w-10 mr-2 " />
              <span className="text-xl tracking-tight">VR Nexus</span>
            </a>
          </div>
          <ul className="hidden lg:flex space-x-12 items-start justify-start">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-8 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sing in
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3  rounded-md"
            >
              Create Account
            </a>
          </div>
          <div className="lg:hidden flex-col justify-end">
            <button
              onClick={toggleNavbar}
              className="flex items-center justify-center"
            >
              {hamburgerMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {hamburgerMenu && (
          <div className="fixed right-0 top-[65px] z-20 bg-neutral-900 w-full p-[5rem] flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item) => (
                <li key={item.id} className="py-5 text-center">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-[20px] items-center justify-center">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sing in
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-900 py-2 px-3 rounded-md sap"
              >
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
