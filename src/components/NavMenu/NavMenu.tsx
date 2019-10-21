import React from "react";

import "./NavMenu.scss";

import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

const drawMenu = (menuJSON: Object) => {
  let subsCount = 0;
  let itemsCount = 0;

  const drawMenuRecursive = (menuJSON: Object) => {
    return Object.values(menuJSON).map((item: any) => {
      return item.subitems ? (
        <SubMenu
          key={"sub" + subsCount++}
          title={
            <span>
              {item.icon ? <Icon type={item.icon} /> : ""}
              <span>{item.title}</span>
            </span>
          }
        >
          {drawMenuRecursive(item.subitems)}
        </SubMenu>
      ) : (
        <Menu.Item key={itemsCount++}>{item.title}</Menu.Item>
      );
    });
  };

  return drawMenuRecursive(menuJSON);
};

export const NavMenu = (props: any) => {
  const { navMenuItems } = props;
  return (
    <Menu style={{ width: 200 }} mode={"inline"} theme={"light"}>
      {drawMenu(navMenuItems)}
    </Menu>
  );
};
