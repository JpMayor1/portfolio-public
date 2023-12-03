/* eslint-disable react-hooks/rules-of-hooks */
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "@/components/LiIcon";

const Details = ({ title, description }) => {
    const reff = useRef(null);
    return (
        <li ref={reff} className="my-8 first:mt-0 last:mb-0">
            <LiIcon reference={reff} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="flex flex-col items-start justify-start flex-wrap w-[90%]"
            >
                <h1 className="font-bold text-dark dark:text-light cursor-default">{title}</h1>
                <p className="text-dark dark:text-light sm:text-base cursor-default">
                    {description}
                </p>
            </motion.div>
        </li>
    );
};

const skills = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "center start"],
    });
    return (
        <>
            <Head>
                <title>JPM | Skills Page</title>
                <meta name="description" content="Skills JPM" />
            </Head>
            <main className="flex items-center text-dark w-screen min-h-screen dark:text-light text-center">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Expertise to help bring your ideas to life"
                        className=" mb-16"
                    />
                    <h2 className="mb-4 text-3xl font-bold uppercase text-dark/75 dark:text-light/75 cursor-default">
                        Skills
                    </h2>
                    <div
                        ref={ref}
                        className="w-[75%] mx-auto relative md:w-full"
                    >
                        <motion.div
                            style={{ scaleY: scrollYProgress }}
                            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light sm:left-3"
                        />
                        <ul className="w-full flex flex-col items-start justify-start pl-[70px] sm:pl-[60px]">
                            <Details
                                title="Next.js"
                                description="(May 2023): With Next.js, I learned how to build server-side rendered React applications that are fast, scalable, and easy to maintain. I learned how to use Next.js features like automatic code splitting, server-side rendering, and static site generation to improve performance and user experience."
                            />
                            <Details
                                title="TypeScript"
                                description="(May 2023): With TypeScript, I learned how to write scalable and maintainable JavaScript code with strong typing and better tooling support. I learned how to use TypeScript's features like interfaces, generics, and decorators to improve code quality, catch errors at compile time, and increase developer productivity."
                            />
                            <Details
                                title="Tailwind CSS"
                                description="(May 2023): With Tailwind CSS, I learned how to use a utility-first CSS framework to quickly and easily style web applications. I learned how to use Tailwind's pre-defined classes to create responsive layouts, typography, colors, and more, and how to customize Tailwind to fit the specific needs of my projects."
                            />
                            <Details
                                title="Figma"
                                description="(January 2023): For Figma, I learned how to use the cloud-based design tool to create user interfaces, prototypes, and animations for web and mobile applications. I learned how to use Figma's tools and features to design layouts, create icons and other graphical elements, and collaborate with others on design projects."
                            />
                            <Details
                                title="MongoDB"
                                description="(January 2023): For MongoDB, I learned about NoSQL databases and how MongoDB stores data as documents. I learned how to use MongoDB queries to retrieve and manipulate data, as well as how to create indexes and perform aggregation operations."
                            />
                            <Details
                                title="Express.js"
                                description="(January 2023): With Express, I learned how to build server-side web applications using Node.js. I learned about middleware, routing, and how to handle HTTP requests and responses."
                            />
                            <Details
                                title="React"
                                description="(January 2023): With React, I learned how to build more complex user interfaces using components and props. I learned about the virtual DOM, JSX syntax, and how to use React's state and lifecycle methods to manage component behavior."
                            />
                            <Details
                                title="Node.js"
                                description="(January 2023): With Node.js, I learned how to use JavaScript to build server-side web applications. I learned about the Node.js runtime, how to use modules, and how to work with the file system and other built-in APIs."
                            />
                            <Details
                                title="PostgreSQL"
                                description="(December 2022): With PostgreSQL, I learned how to create and manage relational databases, as well as how to write SQL queries to retrieve and manipulate data."
                            />
                        </ul>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default skills;
