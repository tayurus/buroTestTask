import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import { Divider } from "antd";

import { CommonForm, PassportForm, FilesForm } from "./forms";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-step");

export class Step1 extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={b({ "1": true })}>
        <div className={b("forms")}>
          <CommonForm />
          <Divider />
          <PassportForm />
          <Divider />
        </div>
        <FilesForm />
      </div>
    );
  }
}
