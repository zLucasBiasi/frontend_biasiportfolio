import type { NextPage } from "next";
import { About } from "../components/About";
import { HeadDocument } from "../components/Head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <HeadDocument />
      <Header />
      <Hero />
      <About />
    </>
  );
};

export default Home;
