import React from "react";
import { withNaming } from "@bem-react/classname";
import "./TextArea.scss";

import { Input } from "antd";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-textarea");

interface Props {
  title: string;
  tip: string;
  meta: any;
  wrapperClassName: string;
}

export const TextArea = (props: Props) => {
  const { title, tip, meta } = props;
  const { touched, error, warning } = meta;
  return (
    <div className={b()}>
      <label className={b("title")}>{title}</label>
      <Input.TextArea {...props} />
      <span className={b("tip")}>{tip}</span>
      {touched &&
        ((error && <span className={b("error")}>{error}</span>) ||
          (warning && <span className={b("warning")}>{warning}</span>))}
    </div>
  );
};

TextArea.defaultProps = {
  className: ""
};
