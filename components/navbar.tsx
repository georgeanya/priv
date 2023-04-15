import { useState } from "react";
import priv from "../public/assets/priv.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

const SustainButton = styled(Button)({
  background: "#5355AC !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "14px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
});

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <div>
      <div className="px-5 md:px-32 pt-5 md:pt-5">
        <nav>
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <img src={priv.src} className="mr-3  self-center" alt="Priv Logo" />

            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden"
              aria-controls="navbar-solid-bg"
              onClick={() => {
                setIsToggled(!isToggled);
              }}
            >
              <span className="sr-only">Open main menu</span>
              {isToggled ? (
                <svg
                  className="w-6 h-6"
                  aria-hidden="false"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-solid-bg"
            >
              <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li className="mt-3 mx-5 ">
                  <Link
                    href="https://privhealth.bumpa.shop"
                    className="text-sm pt-5 text-[#002A47] rounded hover:text-blue-700 md:p-0 "
                  >
                    Shop
                  </Link>
                </li>
                <li className="mt-3 mx-5 ">
                  <Link
                    href="https://medium.com/@tryprivhealth"
                    className="text-sm pt-5 text-[#002A47] rounded hover:text-blue-700 md:p-0 "
                  >
                    Blog
                  </Link>
                </li>
                <li className="ml-5">
                  <Link href="/start">
                    <SustainButton className="text-sm">
                      Get started now
                    </SustainButton>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {isToggled ? (
            <div className="hidden"></div>
          ) : (
            <ul className="pt-5">
              <li>
                <Link
                  href="https://privhealth.bumpa.shop"
                  className="block text-sm py-4"
                >
                  SHop
                </Link>
              </li>
              <li>
                <Link
                  href="https://privhealth.substack.com"
                  className="block text-sm py-4"
                >
                  Blog
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/start">
                  <SustainButton className="text-sm ">
                    Get started
                  </SustainButton>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
