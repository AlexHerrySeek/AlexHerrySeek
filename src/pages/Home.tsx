import React, { useState, useEffect } from "react";
import MusicPlayer from "../components/MusicPlayer";
import { ParallaxBanner } from "react-scroll-parallax";
import { Element } from "react-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import cls from "./Home.module.scss";

import {
  AspectRatio,
  Badge,
  Button,
  Card,
  Grid,
  Heading,
  IconButton,
  Link,
  Text,
  Tooltip,
} from "@radix-ui/themes";

import {
  PiCodeDuotone,
  PiDiscordLogoDuotone,
  PiEnvelopeDuotone,
  PiGithubLogoDuotone,
  PiHeartDuotone,
  PiInfoDuotone,
  PiMagicWandDuotone,
  PiPhoneCallDuotone,
  PiTelegramLogoDuotone,
  PiPlayCircleDuotone,
} from "react-icons/pi";

import type { accentColors } from "@radix-ui/themes/src/props/color.prop.ts";

// Assets
import HaQuynhAnh from "./../assets/images/haquynhanh.svg";
import tsIcon from "./../assets/icons/ts.svg";
import jsIcon from "./../assets/icons/js.svg";
import nodeJSIcon from "./../assets/icons/node-js.svg";
import phpIcon from "./../assets/icons/php.svg";
import reactIcon from "./../assets/icons/react.svg";
import csIcon from "./../assets/icons/cs.svg";
import luaIcon from "./../assets/icons/lua.svg";
import cppIcon from "./../assets/icons/cpp.svg";
import psIcon from "./../assets/icons/ps.svg";

import QADRPC from "./../assets/projects/qadrpc.png";
import rdd from "./../assets/projects/rdd.png";
import desgin from "./../assets/projects/desgin.png";

// Random Ảnh
import banner1 from "./../assets/images/banner/banner.jpg";
import banner2 from "./../assets/images/banner/banner2.jpg";
import banner3 from "./../assets/images/banner/banner3.jpg";
import banner4 from "./../assets/images/banner/banner4.jpg";
import banner5 from "./../assets/images/banner/banner5.jpg";
import banner6 from "./../assets/images/banner/banner6.jpg";
import banner7 from "./../assets/images/banner/banner7.jpg";
import banner8 from "./../assets/images/banner/banner8.jpg";

// Banner array
const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8];

// Social links
const ListSocial = [
  { name: "Discord", icon: <PiDiscordLogoDuotone size={25} />, url: "https://discord.com/users/1429824114289545347" },
  { name: "GitHub", icon: <PiGithubLogoDuotone size={25} />, url: "https://github.com/NguyenNhatIT" },
  { name: "Email", icon: <PiEnvelopeDuotone size={25} />, url: "mailto:nguyenhatsakura@hotmail.com" },
  { name: "Telegram", icon: <PiTelegramLogoDuotone size={25} />, url: "https://t.me/nguyennhatit_dev" },
  { name: "PlayerDou", icon: <PiPlayCircleDuotone size={25} />, url: "https://playerduo.net/khuongduadev" },
];

// Projects
const List = [
  {
    image: desgin,
    name: "Desgin Window Wallpaper",
    type: "Wallpaper",
    description: "A component for the correct operation of the equalizer. It is used in many Wallpaper Engine wallpapers...",
    tech: ["Blogger"],
    buttons: [{ name: "Chrome", url: "https://desgin.trummanguon.com" }],
  },
  {
    image: QADRPC,
    name: "QADRPC",
    type: "Tools",
    description: 'QA Discord Rich Presence Client, customize your "Playing" status, written in C# using discord-rpc-csharp',
    tech: ["C#"],
    buttons: [
      { name: "GitHub", url: "https://github.com/NguyenNhatIT/QADRPC" },
      { name: "Download", url: "https://github.com/NguyenNhatIT/QADRPC/releases/latest" },
    ],
  },
  {
    image: rdd,
    name: "Roblox Deployment Downloader",
    type: "Windows",
    description: "Locally download Windows/Mac Roblox deployments directly from your browser",
    tech: ["JavaScript", "HTML"],
    buttons: [
      { name: "GitHub", url: "https://github.com/NguyenNhatIT/RobloxDeploymentDownloader" },
      { name: "Download", url: "https://rdd-roblox.pages.dev/" },
    ],
  },
];

// Skills
const skills: {
  name: string;
  icon: string;
  description: string;
  color: (typeof accentColors)[number];
  textColor: string;
}[] = [
  { name: "TypeScript", icon: tsIcon, description: "javascript suck :)", color: "blue", textColor: "#007acc" },
  { name: "JavaScript", icon: jsIcon, description: "well i gotchu typescript", color: "yellow", textColor: "#f7df1e" },
  { name: "Node.js", icon: nodeJSIcon, description: "i'm a backend dev :3", color: "green", textColor: "#3c873a" },
  { name: "PHP", icon: phpIcon, description: "shh... i switched to node.js", color: "purple", textColor: "#777bb4" },
  { name: "C#", icon: csIcon, description: "can i make desktop app with this?", color: "purple", textColor: "#a179dc" },
  { name: "C++", icon: cppIcon, description: '"stupid student" award?', color: "blue", textColor: "#649ad2" },
  { name: "Lua", icon: luaIcon, description: "a little bit", color: "cyan", textColor: "#00add8" },
  { name: "React (Native)", icon: reactIcon, description: "i'm a frontend dev too", color: "indigo", textColor: "#61dafb" },
  { name: "Photoshop", icon: psIcon, description: "i love to design my girlfriend :3", color: "sky", textColor: "#31a8ff" },
];

export default function PageHome() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cls.HomePage}>
      {/* Home Section */}
      <Element name="home" className={cls.Main}>
        <ParallaxBanner
          layers={[{ image: HaQuynhAnh, speed: -40, className: cls.BannerInner }]}
          className={cls.Banner}
        />
        <div className={cls.Info}>
          <Heading className={cls.Hello} size="6">
            hi there, i'm alex herry
          </Heading>
          <Text size="2" color="gray">
            i'm do everying thing i love and love u too <PiHeartDuotone />
          </Text>
        </div>
      </Element>

      {/* Skills Section */}
      <Element name="my-skills" className={cls.Section}>
        <div className={cls.Heading}>
          <IconButton className={cls.Icons} size="4" variant="surface">
            <PiMagicWandDuotone size={25} />
          </IconButton>
          <div className={cls.Inf}>
            <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
              my skills
            </Heading>
            <Text size="1" color="gray">ughh... i'm not gud.. sorry...</Text>
          </div>
        </div>
        <Grid columns={{ initial: "1", md: "3", sm: "2", xs: "1" }} gap={{ initial: "1", md: "3", sm: "2", xs: "1" }} width="auto"> {skills.map((skill, index) => ( <Card variant="surface" key={index} className={cls.TechCard}> <IconButton size="4" color={skill.color} variant="soft"> <img src={skill.icon} alt={skill.name} className={cls.TechLogo} /> </IconButton> <div> <Heading style={{ "--text-color": skill.textColor } as React.CSSProperties} className={"PrettyTitle"} size="4"> {skill.name} </Heading> <Text style={{ marginTop: '0.2rem' }} as="div" color="gray" size="1"> {skill.description} </Text> </div> </Card> ))} </Grid>
      </Element>

      {/* Projects Section */}
      <Element name="my-projects" className={cls.Section}>
        <div className={cls.Heading}>
          <IconButton className={cls.Icons} size="4" variant="surface">
            <PiCodeDuotone size={25} />
          </IconButton>
          <div className={cls.Inf}>
            <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
              my projects
            </Heading>
            <Text size="1" color="gray">heh...? too bad...</Text>
          </div>
        </div>
        <Grid columns={{ initial: "1", md: "3", sm: "2", xs: "1" }} gap={{ initial: "1", md: "3", sm: "2", xs: "1" }} width="auto" gapX="3" gapY="3">
          {List.map((project, index) => (
            <Card variant="surface" key={index} className={cls.Projects}>
              <AspectRatio ratio={16 / 9}>
                <LazyLoadImage alt={project.name} effect="blur" src={project.image} width="100%" className={cls.ProjectImage} />
                <div className={cls.ProjectTech}>
                  {project.tech.map((tech, i) => (
                    <Badge variant="outline" key={i} size="1" className={cls.ProjectTechItem}>{tech}</Badge>
                  ))}
                </div>
              </AspectRatio>
              <div className={cls.ProjectInfo}>
                <Heading size="3" className={"PrettyTitle"}>
                  {project.name} <Badge size="1">{project.type}</Badge>
                </Heading>
                <Text size="1" color="gray" className={cls.ProjectDescription}>{project.description}</Text>
              </div>
              <div className={cls.space}></div>
              <div className={cls.Action}>
                {project.buttons.map((button, i) => (
                  <a href={button.url} target="_blank" rel="noreferrer" key={i}>
                    <Button size="1" variant="surface" className={cls.ProjectButton}>{button.name}</Button>
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </Grid>
      </Element>

      {/* About Section with auto-changing banner */}
      <Element name="about-me" className={cls.Section}>
        <div className={cls.Heading}>
          <IconButton className={cls.Icons} size="4" variant="surface">
            <PiInfoDuotone size={25} />
          </IconButton>
          <div className={cls.Inf}>
            <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
              about me
            </Heading>
            <Text size="1" color="gray">本当に、江藤、恥ずかしい。</Text>
          </div>
        </div>
        <div className={cls.BodyAbout}>
          <div className={`${cls.BannerWrapper} ${fade ? cls.FadeIn : cls.FadeOut}`}>
            <LazyLoadImage alt="banner" src={banners[currentBanner]} effect="blur" className={`${cls.BannerAbout} ${cls.NavbarBrand}`} />
          </div>
          <div className={cls.Content}>
           <Text size="2" color="gray">hi, i'm alex herry{" "}<Text size="1" color="gray">(you can call me as herry sakura, khuongdua, đỗ hoài khương, alex herry all fine~)</Text>, from Vietnam. i'm a fullstack developer, i love hà quỳnh anh thing, specially nekooo and oji-san (QA.XIUOI you known lmao). i'm not good at anything, but i'm trying to be better. i love to make something new, something cool, something that can help people. i'm trying become princess before gta 6 heh...</Text>
          </div>
        </div>
      </Element>

      {/* Contact Section */}
      <Element name="contact-me" className={cls.Section}>
        <div className={cls.Heading}>
          <IconButton className={cls.Icons} size="4" variant="surface">
            <PiPhoneCallDuotone size={25} />
          </IconButton>
          <div className={cls.Inf}>
            <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
              contact
            </Heading>
            <Text size="1" color="gray">pls don't call me at 3am...</Text>
          </div>
        </div>
        <div className={cls.BodyContact}>
          <Text align="center" size="3" color="gray">
            For work, please contact me via email:{" "}
            <Link color="gray" href="mailto:nguyenhatsakura@hotmail.com">nguyenhatsakura@hotmail.com</Link>
          </Text>
          <div className={cls.List}>
            {ListSocial.map((social, i) => (
              <Tooltip content={social.name} key={i}>
                <a href={social.url} target="_blank" title={social.name} rel="noreferrer">
                  <IconButton size="4" variant="surface" className={cls.Social}>{social.icon}</IconButton>
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </Element>
      <MusicPlayer />
    </div>
  );
}
