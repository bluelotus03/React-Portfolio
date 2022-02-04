import { Appbar } from "../components/Appbar";
import { Heading } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";
import { ExperienceAccordion } from "../components/ExperienceAccordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faFacebook } from '@fortawesome/free-solid-svg-icons';
import "./App.css";
const socialIconSize = "lg";
export function App() {
  return (
    <>
      <Appbar />
      <main id="Home">
        <section id="landing">
          <h1 className="headline">
            👋 Hey there, I'm&nbsp;
            <a
              href="https://www.linkedin.com/in/ashharmon/"
              rel="noreferrer"
              target="_blank"
            >
              <span>Ashley</span>
            </a>
            , and I love to learn!
          </h1>
          <img
            alt="Software engineer illustration"
            src="/assets/main-image.svg"
            width="90%"
          />
          <article className="about-me">
            <Heading id="About">About Me</Heading>
            <p className="white-p">
              My name is Ashley Harmon, and I'm a MSIT student at UNCC. I love
              to create games and explore new topics. I am also the Web & Media
              Chair for Girls Who Code at UNC Charlotte. I like to create
              technical workshops for us all to learn together. Checkout some of
              these workshops and my project demos below!
            </p>
            <br />
            <div className="social">
              <h3 className="connect-text">Connect with Me</h3>
              <ul className="social-container">
                <li className="social-items">
                  <a
                    href="https://www.linkedin.com/in/ashharmon/"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://www.youtube.com/channel/UCrBn4DZnHLNc-hULSA1H36w"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "youtube"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://twitter.com/ash_hrz00"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://github.com/bluelotus03"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </i>
                  </a>
                </li>
              </ul>
              <br />
              <h3 className="connect-text">Check out my work for GWC</h3>
              <ul className="social-container">
                <li className="social-items">
                  <a
                    href="https://gwc-uncc.github.io/myportfolio/"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fas", "globe"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://www.linkedin.com/company/girls-who-code-at-unc-charlotte/"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://www.instagram.com/girlswhocode_uncc/"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://www.facebook.com/girlswhocode.uncc"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://twitter.com/gwc_uncc"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a href="https://github.com/GWC-UNCC" className="social_link">
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section className="projects-section">
          <div className="blue-box" aria-hidden="true" />
          <Heading id="Projects">
            <span className="black-heading">Projects</span>
          </Heading>
          <div className="project-cards">
            <ProjectCard
              title="NEW GWC Website"
              description="[In-Progress] Leading our team to develop a new site using a Hugo template."
              link="https://docs.google.com/document/d/1tE2iXrtX3vIV__ahqpfQ86p6t2Ngy_QSV97x8hHTEx0/edit?usp=sharing"
              imgSrc="/assets/new-gwc-site.png"
            />
            <ProjectCard
              title="GWC Website"
              description="Temporary single-page website, while our Web Team builds a full website."
              link="https://youtu.be/Lu9n9t3DmOM"
              imgSrc="/assets/gwc-new-site.png"
            />
            <ProjectCard
              title="GWC Website Prototype"
              description="A prototype created with Wix and Premiere Pro for a GWC website idea."
              link="https://youtu.be/6yToLcz0ufo"
              imgSrc="/assets/GWC-prototype.png"
            />
            <ProjectCard
              title="Climate Refugee Stories"
              description="[In-Progress] A freelance project working with a professor at UNCC."
              link="https://climate-refugee-stories.github.io/crs-website/"
              imgSrc="/assets/crs-site.png"
            />
            <ProjectCard
              title="MLH INIT Projects"
              description="A demo of projects completed at this week-long hackathon."
              link="https://youtu.be/5fSmiRu8R_o"
              imgSrc="/assets/mlh-init.png"
            />
            <ProjectCard
              title="Save the Holiday!"
              description="A holiday-themed game built with Kaboom JS for MLH Hackathons."
              link="https://www.youtube.com/watch?v=kErJsKQj3OM"
              imgSrc="/assets/save-the-holiday.png"
            />
            <ProjectCard
              title="Space Ninja"
              description="A fun game created for my Intro to Game Design & Development class."
              link="https://youtu.be/bVSvxj92T6U"
              imgSrc="/assets/spaceninja.png"
            />
            <ProjectCard
              title="The Curse of Waldron"
              description="A fun game created for my Intro to Game Design & Development class."
              link="https://youtu.be/eO4vW0FHvbI"
              imgSrc="/assets/curseofW.png"
            />
          </div>
        </section>
        <section>
          <Heading id="Experience">GWC Workshops</Heading>
          <p className="white-p">
            Below are brief descriptions of the workshops I have created and
            taught for Girls Who Code at UNC Charlotte. All recordings and
            guides created for these workshops can be found&nbsp;
            <a
              href="https://docs.google.com/document/d/1fUOufYgRbcGCmlwe0PDt1L7SaFI-rOlK-KjRlsTU5cs/edit"
              rel="noreferrer"
              target="_blank"
              class="no-line-link"
            >
              <strong>here</strong>
            </a>{" "}
            and are listed in the same order. Also check out my&nbsp;
            <a
              href="https://drive.google.com/file/d/1gOFFOHQWLQels2c5wtD1bt283hHhj6Z1/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              class="no-line-link"
            >
              <strong>research paper</strong>
            </a>{" "}
            on my semester of teaching workshops for more on each of these!
          </p>
          <br />
          <div className="experience-accordions">
            <ExperienceAccordion title="GitHub Workshop: Setup & The Basics">
              This is a workshop where we walked through a step-by-step guide
              learning how to install Git, VS Code, and Hugo, and then work with
              Git using VS Code. In this workshop, you can learn to do things
              like forking and cloning a repository, committing, and pushing.
            </ExperienceAccordion>
            <ExperienceAccordion title="GitHub Workshop: Basics & Next Level">
              This is a workshop where we walked through a step-by-step guide
              learning how to work with Git using VS Code. In this workshop, you
              can learn to do things like forking and cloning a repository,
              pushing and pulling, creating branches, merging branches, and more
              information on what these are and how they're used.
            </ExperienceAccordion>
            <ExperienceAccordion title="Let's Play with Hugo!">
              This is a workshop where we walked through the folders in our
              website repo and then practiced making some changes to the
              template site. In this workshop, you can learn about Hugo, the
              various folders and file types used in our repo, and test out
              making changes with your own fork.
            </ExperienceAccordion>
            <ExperienceAccordion title="Figma Workshop: The Basics">
              This is a workshop from Girls Who Code at UNC Charlotte where we
              walked through learning the basics of Figma and creating a simple
              website prototype. This workshop is paced for those who want to
              follow along. Feel free to speed things up or skip around with the
              time stamps below.
            </ExperienceAccordion>
            <ExperienceAccordion title="Create an Online Portfolio">
              This is a workshop where we learned to create an online portfolio
              from a template by simply replacing some of the HTML and CSS. We
              use Replit for an easy browser editor, but there are instructions
              for using VS Code and GitHub listed in the guide as well. The
              guide itself has a ton of resources for learning HTML and CSS, how
              to work with different editors, publishing your site, and more!
            </ExperienceAccordion>
            <ExperienceAccordion title="Command Line Games">
              This workshop was created to help students get past the fear of
              the concept or commands and try to make learning fun by completing
              levels using commands they learned on the previous level.
              OverTheWire’s Bandit Levels were used for this workshop, and I set
              up an event on CTFd, using a project my husband set up on Digital
              Ocean, to work like a Capture the Flag competition (CTF).
            </ExperienceAccordion>
            <ExperienceAccordion title="Build a Game">
              This workshop was created to teach participants how to use Kaboom
              JS, a JavaScript library, to build a basic version of Space
              Invaders. It was meant to give students some experience working
              with a JavaScript library and seeing the result of that work in
              real-time.
            </ExperienceAccordion>
            <ExperienceAccordion title="Figma Workshop: Working in Teams">
              This is a workshop from Girls Who Code at UNC Charlotte where we
              walked through learning the basics of working with a team in Figma
              and using a team style guide to create a simple website prototype.
            </ExperienceAccordion>
          </div>
        </section>
      </main>
    </>
  );
}
