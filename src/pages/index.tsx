import type { NextPage } from "next";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { HeadDocument } from "../components/Head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

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
    </>
  );
};

export default Home;
