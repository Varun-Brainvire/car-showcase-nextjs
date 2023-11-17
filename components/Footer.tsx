import { footerLinks } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="logo.svg"
            width={118}
            height={18}
            className="object-contain"
          />

          <p className="text-base text-gray-700">
            Car Hub <br /> All Rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links">
            {footerLinks.map((item) => {
                return(
                    <div key={item.title} className="footer__link">
                        <h3 className="font-bold">{item.title}</h3>
                        {item.links.map((links) => {
                            return(
                                <Link key={links.title} href={links.url} className="text-gray-500">{links.title}</Link>
                            )
                        })}
                    </div>
                )
            })}
        </div>
        </div>

            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                <p>@2023 CarHub. All Rights Reserved </p>
                <div className="footer__copyrights-link">
                    <Link href="/" className="text-gray-500">
                        Privacy Policy
                    </Link>
                    <Link href="/" className="text-gray-500">
                        Terms of use
                    </Link>
                </div>
            </div>

      
    </footer>
  );
};

export default Footer;