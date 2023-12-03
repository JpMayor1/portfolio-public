import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
    FacebookIcon,
    GithubIcon,
    LinkedInIcon,
    MoonIcon,
    SunIcon,
    TiktokIcon,
} from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block dark:bg-light  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    router.asPath === href ? "w-full" : "w-0"
                }`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <button
            href={href}
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[1px] inline-block dark:bg-dark  bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    router.asPath === href ? "w-full" : "w-0"
                }`}
            >
                &nbsp;
            </span>
        </button>
    );
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full px-32 md:px-8  py-8 font-medium flex items-center justify-between dark:text-light relative z-10">
            <button
                className="flex-col justify-center items-center hidden lg:flex"
                onClick={handleClick}
            >
                <span
                    className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                        isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm m-0.5 ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
                        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                ></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav
                    className="flex items-center justify-center flex-wrap
            "
                >
                    <button
                        onClick={() =>
                            setMode(mode === "light" ? "dark" : "light")
                        }
                        className={`mr-3 flex items-center justify-center rounded-full p-1 ${
                            mode === "light"
                                ? "bg-dark text-light"
                                : "bg-light text-dark"
                        }`}
                    >
                        {mode === "dark" ? (
                            <SunIcon className={"fill-dark"} />
                        ) : (
                            <MoonIcon className={"fill-dark"} />
                        )}
                    </button>
                    <motion.a
                        href="https://github.com/JpMayor1"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/james-mayor-28a228269/"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href="https://web.facebook.com/jamesphillip.mayor.7"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <FacebookIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.tiktok.com/@james.m010"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <TiktokIcon />
                    </motion.a>
                </nav>
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink
                        href="/skills"
                        title="Skills"
                        className="mx-4"
                    />
                    <CustomLink
                        href="/projects"
                        title="Projets"
                        className="ml-4"
                    />
                </nav>
            </div>

            {/* menu */}

            {isOpen ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
                >
                    <nav
                        className="flex items-center justify-center flex-wrap mt-2 z-30
            "
                    >
                        <button
                            onClick={() =>
                                setMode(mode === "light" ? "dark" : "light")
                            }
                            className={`mr-3 flex items-center justify-center rounded-full p-1 z-50 ${
                                mode === "light"
                                    ? "bg-dark text-light"
                                    : "bg-light text-dark"
                            }`}
                        >
                            {mode === "dark" ? (
                                <SunIcon className={"fill-dark"} />
                            ) : (
                                <MoonIcon className={"fill-dark"} />
                            )}
                        </button>
                        <motion.a
                            href="https://github.com/JpMayor1"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 sm:mr-2 bg-light rounded-full dark:bg-dark"
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/james-mayor-28a228269/"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 sm:mr-2"
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a
                            href="https://web.facebook.com/jamesphillip.mayor.7"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 sm:mr-2"
                        >
                            <FacebookIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.tiktok.com/@james.m010"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 sm:mr-2"
                        >
                            <TiktokIcon />
                        </motion.a>
                    </nav>
                    <nav className="flex items-center flex-col justify-center ">
                        <CustomMobileLink
                            href="/"
                            title="Home"
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/about"
                            title="About"
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/skills"
                            title="Skills"
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/projects"
                            title="Projets"
                            toggle={handleClick}
                        />
                    </nav>
                </motion.div>
            ) : null}
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-0 top-0 w-full text-center pt-7 pointer-events-none"
            >
                <Link
                    href={"/"}
                    className="text-xl font-bold dark:text-light pointer-events-auto"
                >
                    JP.
                    <span className="text-primary dark:text-primaryDark">
                        M
                    </span>
                </Link>
            </motion.div>
        </header>
    );
};

export default NavBar;
