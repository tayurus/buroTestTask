import React from "react";
import { withNaming } from "@bem-react/classname";
import "./Input.scss";

import { Input as AntdInput } from "antd";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-input");

interface Props {
  title: string;
  tip: string;
}

export const Input = (props: Props) => {
  const { title, tip } = props;

  return (
    <div className={b()}>
      <label className={b("title")}>{title}</label>
      <AntdInput size="large" />
      <span className={b("tip")}>{tip}</span>
    </div>
  );
};
