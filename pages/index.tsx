import fs from "fs";
import path from "path";

import { GetStaticProps } from "next";
import Head from "next/head";
import { useRef } from "react";

import Main from "../components/Main";
import Section from "../components/Section";
import Emoji from "../components/Emoji";
import SocialNetwork from "../components/SocialNetwork";
import Repo from "../components/Repo";

import { VscGithub, VscTwitter } from "react-icons/vsc";
import { ImYoutube } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { RiInstagramLine } from "react-icons/ri";

export const getStaticProps: GetStaticProps = async () => {
  const songsDirectory = path.join(process.cwd(), "public/musics");
  const songs = fs.readdirSync(songsDirectory);

  const reposRes = await fetch("https://api.github.com/users/Magah051/repos");
  const repos = await reposRes.json();

  repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return {
    props: {
      songs,
      repos,
    },
    revalidate: 3600,
  };
};

type props = {
  songs: Array<String>;
  repos: Array<any>;
};

const handleClickScroll = (ref) => {
  if (!ref || ref.current == null) return;

  ref.current.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
const myAge = getAge("1991/09/15").toString();

const Home = (props: props) => {
  const whoAmISectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  return (
    <div className="pattern cursor-default flex flex-col justify-center items-center min-h-screen h-full bg-zinc-100 dark:bg-dark-blurple p-8 md:p-12 lg:p-14 transition-colors duration-300">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main
        songs={props?.songs}
        whoAmISectionRef={whoAmISectionRef}
        projectsSectionRef={projectsSectionRef}
        contactSectionRef={contactSectionRef}
      />

      <Section title={"Quem eu sou?"}>
        <div ref={whoAmISectionRef}>
          <p>joses.magalhaes12@gmail.com</p>
          <br />
          <p>
            <strong>Olá!</strong> Meu nome é{" "}
            <strong
              className="text-violet-500 cursor-pointer link link-underline link-underline-violet-500"
              onClick={() => handleClickScroll(contactSectionRef)}
            >
              José Magalhães
            </strong>
            , tenho {myAge} anos e sou Brasileiro.{" "}
            <Emoji symbol="🇵🇹" /></p>
          <br />
          <p>José Magalhães nasceu na cidade de Piracuruca-PI. Em 2007 começa a estudar música, tendo como instrumentos preferidos violão e piano. Em 2008, começa a estudar informática tendo como ênfase, manutenção de hardwares e redes. Em 2011, inicia seus estudos em Letras Inglês pela Universidade Estadual do Piauí, se especializando mais tarde em Literatura Fantástica em diversas culturas. 
          </p>
          <br/>
          <p>Em 2017, estuda Sistemas de Informação pela Universidade Federal do Piauí, onde especializa-se em diversas linguagens de programação, sendo elas as mais usadas Python e PHP. Desde 2018, vem atuando com tecnologia e educação,
sendo professor de todos os níveis desde a Educação Básica à Pós- Graduação, e nas modalidades presencial, hibrido e 100% online.</p>
          <br />
          <p>Atualmente atua como Professor de Programação, Consultor de Tecnologia e Escritor de Materiais Didáticos. Como hobby é escritor de literatura fantástica, músico e skatista.</p>
          </div>
      </Section>

      {/* <Section title={"Skills"}>
        <div>
          <p>[...in progress]</p>
          <br />
          <p>
            Voluptate labore laboris pariatur sunt ex nulla voluptate id cillum.
            Proident laborum ex exercitation aliqua sunt deserunt proident
            labore ut. Do voluptate anim sint adipisicing aliqua labore aliquip.
          </p>
          <br />
          <p>
            Ut amet ad commodo aliqua in enim. Aliquip in sunt adipisicing magna
            laborum nostrud laborum officia ea deserunt est et. Culpa enim magna
            dolor aute officia ut est culpa qui pariatur consequat nulla
            consequat.
          </p>
        </div>
      </Section> */}

      <Section title={"Projetos"}>
        <div ref={projectsSectionRef}>
          <p>{"{ github.com/Magah051 }"}</p>
          <br />
          <div className="flex max-h-[660px] overflow-auto">
            <div className="space-y-7">
              {props?.repos &&
                props?.repos.map((r) => {
                  if (!r.fork && r.name != "Magah051")
                    return <Repo key={r.id.toString()} repo={r} />;
                })}
            </div>
            <div className="w-6"></div>
          </div>
        </div>
      </Section>

      <Section title={"Contato"}>
        <div ref={contactSectionRef}>
          <p>O.o ~ o.o ~ o.O</p>
          <br />
          <ul className="space-y-1.5">
            <SocialNetwork
              name="Github"
              url="//github.com/Magah051"
              username="@Magah051"
              Icon={VscGithub}
            />

            {/* <SocialNetwork
              name="LinkedIn"
              url="//linkedin.com/in/zf4ke"
              username="@zf4ke"
              Icon={FaLinkedinIn}
            /> */}

            <SocialNetwork
              name="Discord"
              url="#"
              username="Magalhães#8452"
              Icon={SiDiscord}
            />

            {/* <SocialNetwork
              name="Twitter"
              url="//twitter.com/zF4ked"
              username="@zF4ked"
              Icon={VscTwitter}
            />

            <SocialNetwork
              name="Instagram"
              url="//instagram.com/zf4ked/"
              username="@zF4ked"
              Icon={RiInstagramLine}
            /> */}
          </ul>
          <p>...</p>
          <br />
          <a
            href="mailto:joses.magalhaes12@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 transitions-all duration-100 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
          >
            Me manda um Email!
          </a>
        </div>
      </Section>

      <div className="mt-32"></div>

      <footer className="text-center mt-16 font-mono text-zinc-500">
        &copy; Magah051 {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Home;
