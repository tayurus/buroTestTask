import React from "react";
import { withNaming } from "@bem-react/classname";
import "./RadioGroup.scss";

import { Radio as AntdRadio } from "antd";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-radio");

interface Props {
  name: string;
  children: any;
}

export const RadioGroup = (props: Props) => {
  const { name } = props;

  return (
    <div className={b()}>
      <AntdRadio.Group name={name} {...props}>
        {props.children}
      </AntdRadio.Group>
    </div>
  );
};
