import type { NextPage } from "next";

import {
    HeadDocument,
    Header,
    Hero,
    About,
    Skills,
    Projects,
    Contact,
    ButtonTop,
} from "../components";

const Home: NextPage = () => {
    return (
        <>
            <HeadDocument />
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <ButtonTop />
        </>
    );
};

export default Home;
