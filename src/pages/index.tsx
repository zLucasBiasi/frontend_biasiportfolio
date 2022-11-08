import type { NextPage } from "next";
import { useContext } from "react";

import { About } from "../components/About";
import { ButtonTop } from "../components/ButtonTop";
import { Contact } from "../components/Contact";
import { HeadDocument } from "../components/Head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ThemeProvider } from "styled-components";
import { DarkModeContext } from "../context/darkMode";

import Global from "../styles/global";

const Home: NextPage = () => {
  const { theme } = useContext(DarkModeContext);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <HeadDocument />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ButtonTop />
      </ThemeProvider>
    </>
  );
};

export default Home;
