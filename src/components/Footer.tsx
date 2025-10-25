import { Link, Text } from "@radix-ui/themes";
import cls from "./Footer.module.scss";
import logo from "./../assets/images/full-ver.png";

export default function Footer() {
  return (
    <div className={cls.Footer}>
      <div className="sakana-box-l"></div>
      <div className="sakana-box-r"></div>
      <div className="stwBlurRainbow"></div>
      <div className={cls.Inner}>
        <img srcSet={logo} alt="logo" className={cls.Logo} />
        <div className={cls.Content}>
          <Text size="1" color="gray">
            Photo Girl by{" "}
            <Link
              color="gray"
              href="https://www.tiktok.com/@qa.xiuoi"
              target="_blank"
            >
              Xíu Ơi
            </Link>
            . Website created with{" "}
            <Link
              color="gray"
              href="https://vite.dev/guide/#scaffolding-your-first-vite-project"
              target="_blank"
            >
              Vite + React
            </Link>
            .
          </Text>
          <Text size="1" color="gray">
            &copy; 2025 Nguyễn Minh Nhật.{" "}
            <Link
              color="gray"
              href="https://github.com/nguyennhatit"
              target="_blank"
            >
              Available under the CC BY-NC-SA 4.0 license
            </Link>
            .
          </Text>
          <div
            style={{
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <b style={{ color: "blue", fontSize: "20px" }}>Version Code: 2.1</b>
            <a
              href="//www.dmca.com/Protection/Status.aspx?ID=76fc89b9-08c6-4363-923c-61c848f481ff"
              title="DMCA.com Protection Status"
              style={{ display: "inline-block" }}
            >
              <img
                src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-07.png?ID=76fc89b9-08c6-4363-923c-61c848f481ff"
                alt="DMCA.com Protection Status"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
