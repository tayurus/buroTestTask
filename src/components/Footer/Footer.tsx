import React from "react";
import { withNaming } from "@bem-react/classname";
import "./Footer.scss";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-footer");

export const Footer = (props: any) => {
  return (
    <footer className={b()}>
      <ul className={b("list")}>
        <li className={b("list-item")}>
          <a href="#" className={b("link")}>
            Пользовательское соглашение
          </a>
        </li>
        <li className={b("list-item")}>
          <a href="#" className={b("link")}>
            Пополнение
          </a>
        </li>
        <li className={b("list-item")}>
          <a href="#" className={b("link")}>
            Регламент удостоверяющего центра
          </a>
        </li>
      </ul>
    </footer>
  );
};
