import React from "react";
import { withNaming } from "@bem-react/classname";
import "./Dragger.scss";

import { Upload, Icon } from "antd";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-autocomplete");

interface Props {
  title: string;
  tip: string;
}

export const Dragger = (props: Props) => {
  const { title, tip } = props;

  return (
    <div className={b()}>
      <Upload.Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">{title}</p>
        <p className="ant-upload-hint">{tip}</p>
      </Upload.Dragger>
    </div>
  );
};
