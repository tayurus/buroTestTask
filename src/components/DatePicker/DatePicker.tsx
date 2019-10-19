import React from "react";
import { withNaming } from "@bem-react/classname";
import "./DatePicker.scss";

import { DatePicker as AntdDatePicker } from "antd";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-datepicker");

interface Props {
  title: string;
  tip: string;
  meta: any;
}

export const DatePicker = (props: Props) => {
  const { title, tip, meta } = props;
  const { touched, error, warning } = meta;
  return (
    <div className={b()}>
      <label className={b("title")}>{title}</label>
      <AntdDatePicker size="large" {...props} />
      <span className={b("tip")}>{tip}</span>
      {touched &&
        ((error && <span className={b("error")}>{error}</span>) ||
          (warning && <span className={b("warning")}>{warning}</span>))}
    </div>
  );
};
