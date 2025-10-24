import { ParallaxBanner } from "react-scroll-parallax";
import cls from "./Home.module.scss";
import HaQuynhAnh from "./../assets/images/haquynhanh.svg";
import { Element } from 'react-scroll'
import { AspectRatio, Badge, Button, Card, Grid, Heading, IconButton, Link, Text, Tooltip } from "@radix-ui/themes";
import { PiCodeDuotone, PiDiscordLogoDuotone, PiEnvelopeDuotone, PiGithubLogoDuotone, PiHeartDuotone, PiInfoDuotone, PiMagicWandDuotone, PiPhoneCallDuotone, PiTelegramLogoDuotone } from "react-icons/pi";
import type { accentColors } from "@radix-ui/themes/src/props/color.prop.ts";

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
import banner from "./../assets/images/banner.jpg";
import desgin from "./../assets/projects/desgin.png";

const ListSocial = [
    {
        name: "Discord",
        icon: <PiDiscordLogoDuotone size={25} />,
        url: "https://discord.com/users/1429550431176101990"
    },
    {
        name: "GitHub",
        icon: <PiGithubLogoDuotone size={25} />,
        url: "https://github.com/NguyenNhatIT"
    },
    {
        name: "Email",
        icon: <PiEnvelopeDuotone size={25} />,
        url: "mailto:minhtientiny@gmail.com"
    },
    {
        name: "Telegram",
        icon: <PiTelegramLogoDuotone size={25} />,
        url: "https://t.me/nguyennhatit_dev"
    }
];

const List = [
    {
        image: desgin,
        name: "Desgin Window Wallpaper",
        type: "Wallpaper",
        description: "A component for the correct operation of the equalizer. It is used in many Wallpaper Engine wallpapers...",
        tech: [
            "Blogger"
        ],
        buttons: [
            {
                name: "Chrome",
                url: 'https://desgin.trummanguon.com'
            }
        ]
    },
    {
        image: QADRPC,
        name: "QADRPC",
        type: "Tools",
        description: "QA Discord Rich Presence Client, customize your \"Playing\" status, written in C# using discord-rpc-csharp",
        tech: [
            "C#"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/NguyenNhatIT/QADRPC"
            },
            {
                name: "Download",
                url: "https://github.com/NguyenNhatIT/QADRPC/releases/latest"
            }
        ]
    },
    {
        image: rdd,
        name: "Roblox Deployment Downloader",
        type: "Windows",
        description: "Locally download Windows/Mac Roblox deployments directly from your browser",
        tech: [
            "JavaScript",
            "HTML"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/NguyenNhatIT/RobloxDeploymentDownloader"
            },
            {
                name: "Download",
                url: "https://rdd-roblox.pages.dev/"
            }
        ]
    }
]

const skills: {
    name: string,
    icon: string,
    description: string,
    color: typeof accentColors[number],
    textColor: string
}[] = [
        {
            name: "TypeScript",
            icon: tsIcon,
            description: "javascript suck :)",
            color: "blue",
            textColor: "#007acc"
        },
        {
            name: "JavaScript",
            icon: jsIcon,
            description: "well i gotchu typescript",
            color: "yellow",
            textColor: "#f7df1e"
        },
        {
            name: "Node.js",
            icon: nodeJSIcon,
            description: "i'm a backend dev :3",
            color: "green",
            textColor: "#3c873a"
        },
        {
            name: "PHP",
            icon: phpIcon,
            description: "shh... i switched to node.js",
            color: "purple",
            textColor: "#777bb4"
        },
        {
            name: "C#",
            icon: csIcon,
            description: "can i make desktop app with this?",
            color: "purple",
            textColor: "#a179dc"
        },
        {
            name: "C++",
            icon: cppIcon,
            description: "\"stupid student\" award?",
            color: "blue",
            textColor: "#649ad2"
        },
        {
            name: "Lua",
            icon: luaIcon,
            description: "a little bit",
            color: "cyan",
            textColor: "#00add8"
        },
        {
            name: "React (Native)",
            icon: reactIcon,
            description: "i'm a frontend dev too",
            color: "indigo",
            textColor: "#61dafb"
        },
        {
            name: "Photoshop",
            icon: psIcon,
            description: "i love to design my waifu :3",
            color: "sky",
            textColor: "#31a8ff"
        }
    ]

export default function PageHome() {
    return (
        <div className={cls.HomePage}>
            <Element name="home" className={cls.Main}>
                <ParallaxBanner
                    layers={[{ image: HaQuynhAnh, speed: -40, className: cls.BannerInner }]}
                    className={cls.Banner}
                />
                <div className={cls.Info}>
                    <Heading className={cls.Hello} size="6">
                        hi there, i'm herry sakura
                    </Heading>
                    <Text size="2" color="gray">
                        i'm do everying thing i love and love u too <PiHeartDuotone />
                    </Text>
                </div>
            </Element>
            <Element name="my-skills" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiMagicWandDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            my skills
                        </Heading>
                        <Text size="1" color="gray">
                            ughh... i'm not gud.. sorry...
                        </Text>
                    </div>
                </div>
                <Grid columns={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} gap={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} width="auto">
                    {skills.map((skill, index) => (
                        <Card variant="surface" key={index} className={cls.TechCard}>
                            <IconButton size="4" color={skill.color} variant="soft">
                                <img src={skill.icon} alt={skill.name} className={cls.TechLogo} />
                            </IconButton>
                            <div>
                                <Heading style={{ "--text-color": skill.textColor } as React.CSSProperties} className={"PrettyTitle"} size="4">
                                    {skill.name}
                                </Heading>
                                <Text style={{ marginTop: '0.2rem' }} as="div" color="gray" size="1">
                                    {skill.description}
                                </Text>
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Element>
            <Element name="my-projects" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiCodeDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            my projects
                        </Heading>
                        <Text size="1" color="gray">
                            heh...? too bad...
                        </Text>
                    </div>
                </div>
                <Grid columns={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} gap={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} width="auto" gapX="3" gapY="3">
                    {List.map((project, index) => (
                        <Card variant="surface" key={index} className={cls.Projects}>
                            <AspectRatio ratio={16 / 9}>
                                <img src={project.image} alt={project.name} className={cls.ProjectImage} />
                                <div className={cls.ProjectTech}>
                                    {project.tech.map((tech, index) => (
                                        <Badge variant="outline" key={index} size="1" className={cls.ProjectTechItem}>
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </AspectRatio>

                            <div className={cls.ProjectInfo}>
                                <Heading size="3" className={"PrettyTitle"}>
                                    {project.name} <Badge size="1">{project.type}</Badge>
                                </Heading>
                                <Text size="1" color="gray" className={cls.ProjectDescription}>
                                    {project.description}
                                </Text>
                            </div>
                            <div className={cls.space}></div>
                            <div className={cls.Action}>
                                {project.buttons.map((button, index) => (
                                    <a href={button.url} target="_blank" rel="noreferrer">
                                        <Button size="1" key={index} variant="surface" className={cls.ProjectButton}>
                                            {button.name}
                                        </Button>
                                    </a>
                                ))}
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Element>
            <Element name="about-me" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiInfoDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            about me
                        </Heading>
                        <Text size="1" color="gray">
                            本当に、江藤、恥ずかしい。
                        </Text>
                    </div>
                </div>
                <div className={cls.BodyAbout}>
                    <img src={banner} alt="banner" className={`${cls.BannerAbout} ${cls.NavbarBrand}`} />
                    <div className={cls.Content}>
                        <Text size="2" color="gray">
                            hi, i'm herry sakura <Text size="1" color="gray">(you can call me as herry sakura, khuongdua, neko all fine~)</Text>, from Vietnam. i'm a fullstack developer, i love kawaii thing, specially nekooo and oji-san (HaQuynhAnh you known lmao). i'm not good at anything, but i'm trying to be better. i love to make something new, something cool, something that can help people. i'm trying become princess before gta 6 heh...
                        </Text>
                    </div>
                </div>
            </Element>
            <Element name="contact-me" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiPhoneCallDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            contact
                        </Heading>
                        <Text size="1" color="gray">
                            pls don't call me at 3am...
                        </Text>
                    </div>
                </div>
                <div className={cls.BodyContact}>
                    <Text align="center" size="3" color="gray">
                        For work, please contact me via email: <Link color="gray" href="mailto:minhtientiny@gmail.com">minhtientiny@gmail.com</Link>
                    </Text>

                    <div className={cls.List}>
                        {ListSocial.map((social, index) => (
                            <Tooltip content={social.name} key={index}>
                                <a href={social.url} target="_blank" title={social.name} rel="noreferrer">
                                    <IconButton size="4" variant="surface" className={cls.Social}>
                                        {social.icon}
                                    </IconButton>
                                </a>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </Element>
        </div>
    )
}
