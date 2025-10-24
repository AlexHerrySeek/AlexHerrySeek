import { useEffect, useState } from "react";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import clsx from "clsx";
import cls from "./Header.module.scss";
import MainIcon from "./icons/MainIcon";
import { Link } from "react-scroll";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const routes = [
  { name: "home", id: "home" },
  { name: "skills", id: "my-skills" },
  { name: "projects", id: "my-projects" },
  { name: "about", id: "about-me" },
  { name: "contact", id: "contact-me" },
];

export default function Header() {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    function ScrollEvent() {
      setShowBg(window.scrollY >= 40);
    }
    window.addEventListener("scroll", ScrollEvent);
    return () => window.removeEventListener("scroll", ScrollEvent);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sakana";
    script.async = true;
    script.onload = () => {
      Sakana.setMute(!1),
        Sakana.init({
          el: ".sakana-box-l",
          scale: 0.5,
          character: "takina",
          canSwitchCharacter: !1,
          inertia: 0.001,
          decay: 1,
        }),
        Sakana.init({
          el: ".sakana-box-r",
          scale: 0.5,
          character: "chisato",
          canSwitchCharacter: !1,
          inertia: 0.001,
          decay: 1,
        });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={clsx(cls.Header, showBg && cls.bg)}>
      <div className={cls.Inner}>
        <Link to="home" duration={500} smooth>
          <IconButton className={cls.HomeBtn} size="3" variant="ghost">
            <MainIcon fontSize={25} />
          </IconButton>
        </Link>

        <div className={cls.Nav}>
          {routes.map((route, index) => (
            <Link
              key={index}
              activeClass="rt-variant-surface"
              className={clsx(
                "rt-reset rt-BaseButton rt-r-size-2 rt-variant-ghost rt-Button",
                cls.NavBtn
              )}
              to={route.id}
              spy={true}
              smooth={true}
              duration={500}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <IconButton className={cls.MbMenu} variant="surface">
              <HamburgerMenuIcon />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {routes.map((route, index) => (
              <Link
                key={index}
                to={route.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                <DropdownMenu.Item>{route.name}</DropdownMenu.Item>
              </Link>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}