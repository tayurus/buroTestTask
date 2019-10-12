import React from "react";
import { withNaming } from "@bem-react/classname";
import logo from "./img/logo.svg";
import "./Header.scss";

import { Menu, Dropdown, Icon, Button, Avatar } from "antd";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-header");

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">Личный кабинет</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">Выйти</a>
    </Menu.Item>
  </Menu>
);

export const Header = props => {
  return (
    <header className={b()}>
      <div className={b("inner")}>
        <div className={b("logo-wrapper")}>
          <img src={logo} />
          <div>
            <Button size="small" className={b("save")}>
              Сохранить
            </Button>
            <Button icon="delete" className={b("delete")} />
          </div>
        </div>

        <div className={b("menu")}>
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            className={b("avatar")}
            src="https://avatars3.githubusercontent.com/u/40214545?s=460&v=4"
          />
          <Dropdown overlay={menu} trigger={["click"]}>
            <a className="ant-dropdown-link" href="#">
              <div className={b("username")}>Юля Красивая</div>
              <Icon type="down" style={{ fontSize: "12px", color: "#fff", marginTop: "3px" }} />
            </a>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};
