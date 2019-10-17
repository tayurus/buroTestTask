import React from "react";
import { withNaming } from "@bem-react/classname";
import "./AutoComplete.scss";

import { AutoComplete as AntdAutoComplete } from "antd";
const { Option } = AntdAutoComplete;

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-autocomplete");

interface Props {
  title: string;
  tip: string;
  options: Array<any>;
}

export const AutoComplete = (props: Props) => {
  const { title, tip, options } = props;

  return (
    <div className={b()}>
      <label className={b("title")}>{title}</label>
      <AntdAutoComplete size="large" {...props}>
        {options.map(opt => (
          <Option value={opt.value}>{opt.title}</Option>
        ))}
      </AntdAutoComplete>
      <span className={b("tip")}>{tip}</span>
    </div>
  );
};
