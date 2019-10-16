import React from "react";
import { Breadcrumb, Button } from "antd";
import { withNaming } from "@bem-react/classname";
import "./Breadcrumbs.scss";
const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-breadcrumbs");

interface Props {
  backLabel: string;
  items: Array<Object>;
  className: string;
}

export const Breadcrumbs = (props: Props) => {
  const { backLabel, items, className } = props;
  return (
    <div className={`${b()} ${className}`}>
      {backLabel && (
        <Button icon="arrow-left" className={b("back")}>
          {backLabel}
        </Button>
      )}

      <Breadcrumb>
        {items.map((item: any) => (
          <Breadcrumb.Item>
            <a href={item.href}>{item.text}</a>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

Breadcrumbs.defaultProps = {
  className: ""
};
