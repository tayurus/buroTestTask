import React from "react";
import { withNaming } from "@bem-react/classname";
import "./Radio.scss";

import { Radio as AntdRadio } from "antd";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-radio");

interface Props {
  value: string;
  title: string;
  name: string;
  meta: any;
}

export const Radio = (props: Props) => {
  const { title, value, name, meta } = props;
  const { touched, error, warning } = meta;
  return (
    <div className={b()}>
      <AntdRadio value={value} name={name} {...props}>
        {title}
      </AntdRadio>
      {touched &&
        ((error && <span className={b("error")}>{error}</span>) ||
          (warning && <span className={b("warning")}>{warning}</span>))}
    </div>
  );
};
