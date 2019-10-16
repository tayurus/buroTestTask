import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import { Divider } from "antd";

import { CommonForm } from "./forms/Common/Common";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-step");

export class Step1 extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={b()}>
        <CommonForm />
        <Divider />
      </div>
    );
  }
}
