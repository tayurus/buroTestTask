import React from "react";
import { withNaming } from "@bem-react/classname";
import "./Select.scss";

import { Select as AntdSelect } from "antd";
const { Option } = AntdSelect;

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-input");

interface Props {
  title: string;
  tip: string;
  options: Array<any>;
}

export const Select = (props: Props) => {
  const { title, tip, options } = props;

  return (
    <div className={b()}>
      <label className={b("title")}>{title}</label>
      <AntdSelect showSearch size="large" {...props}>
        {options.map(opt => (
          <Option value={opt.val}>{opt.title}</Option>
        ))}
      </AntdSelect>
      <span className={b("tip")}>{tip}</span>
    </div>
  );
};
