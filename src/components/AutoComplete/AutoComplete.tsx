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
  meta: any;
}

export const AutoComplete = (props: Props) => {
  const { title, tip, options, meta } = props;
  const { touched, error, warning } = meta;
  return (
    <div className={b()}>
      <label className={b("title")}>{title}</label>
      <AntdAutoComplete
        size="large"
        {...props}
        filterOption={(inputValue, option: any) =>
          option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      >
        {options.map(opt => (
          <Option value={opt.value}>{opt.title}</Option>
        ))}
      </AntdAutoComplete>
      <span className={b("tip")}>{tip}</span>
      {touched &&
        ((error && <span className={b("error")}>{error}</span>) ||
          (warning && <span className={b("warning")}>{warning}</span>))}
    </div>
  );
};
