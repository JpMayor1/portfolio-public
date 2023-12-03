import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
            <Layout className="py-8 flex items-center justify-center lg:flex-col lg:py-6">
                <span className="cursor-default mr-1 text-center">
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </span>
                <div
                    className="flex
                items-center cursor-default lg:py-2"
                >
                    Build With
                    <span className="text-primary text-2xl px-1 dark:text-primaryDark">
                        &#9825;
                    </span>
                    by&nbsp;
                    <Link href={"/"} className="underline underline-offset-2">
                        JP.
                        <span className="text-primary dark:text-primaryDark">
                            M
                        </span>
                    </Link>
                </div>
            </Layout>
        </footer>
    );
};

export default Footer;
