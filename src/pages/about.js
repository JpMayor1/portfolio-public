import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/developer.png";

const about = () => {
    return (
        <>
            <Head>
                <title>JPM | About Page</title>
                <meta name="description" content="about JPM" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Hi there! My name is James Phillip Mayor, full-stack developer."
                        className="mb-16 sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-8">
                        <div className="col-span-4 flex flex-col items-start justify-start md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light cursor-default">
                                About Me
                            </h2>
                            <p className="my-4 font-medium cursor-default">
                                I&apos;m passionate about creating dynamic,
                                user-friendly web applications that help
                                businesses and individuals achieve their goals.
                                As a full-stack developer, I have experience
                                working with both front-end and back-end
                                technologies, and I&apos;m always eager to learn
                                more.
                            </p>
                            <p className="my-4 font-medium cursor-default">
                                I&apos;m a detail-oriented problem solver who
                                enjoys tackling complex challenges, and I&apos;m
                                always looking for opportunities to improve my
                                skills and expand my knowledge. Whether
                                it&apos;s learning a new programming language or
                                exploring the latest web development tools and
                                frameworks, I&apos;m up for the challenge.
                            </p>
                        </div>
                        <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light md:col-span-8">
                            <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-[1em] bg-dark dark:bg-light" />
                            <Image
                                src={profilePic}
                                alt="Developer"
                                priority
                                className="w-full h-auto rounded-2xl border border-dark border-solid dark:border-light"
                                sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default about;
