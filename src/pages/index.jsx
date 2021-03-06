import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hi ya, <br /> I'm Brian Bartholomew.
        </BigTitle>
        <Subtitle>
          I build the internet using React and love teaching others how to code.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>What I am doing now?</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Code With Brian"
            link="https://www.twitch.tv/codesagas"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Find me on twitch.tv mon-fri crushing it, teaching some coding
            basics and buiding apps.
          </ProjectCard>
          <ProjectCard
            title="Adjunct Instructor"
            link="https://ebacon.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            During the day I am lead engineer at TAG|eBacon.
          </ProjectCard>
          {/* <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard> */}
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            I am native javascript speaker. My english is sometimes a little
            rusty and has an over use of emojis.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Programing came to me in highschool as form of escape from the mundane
          highschool routine. Later in life I found myself hacking away at wix
          and wordpress. Eventually droping out of college twice, I became a
          full time developer and educator.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:me@bcbrian.com">Hi</a> or find me on other
            platforms: <a href="https://github.com/bcbrian">Github</a> &{" "}
            <a href="https://twitter.com/thebcbrian">Twitter</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Brian Bartholomew.{" "}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            This template
          </a>{" "}
          was made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
