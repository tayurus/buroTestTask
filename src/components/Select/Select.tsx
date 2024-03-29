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
  meta: any;
}

export const Select = (props: Props) => {
  const { title, tip, options, meta } = props;
  const { touched, error, warning } = meta;

  return (
    <div className={b()}>
      <label className={b("title")}>{title}</label>
      <AntdSelect showSearch size="large" {...props}>
        {options.map(opt => (
          <Option value={opt.val}>{opt.title}</Option>
        ))}
      </AntdSelect>
      <span className={b("tip")}>{tip}</span>
      {touched &&
        ((error && <span className={b("error")}>{error}</span>) ||
          (warning && <span className={b("warning")}>{warning}</span>))}
    </div>
  );
};
