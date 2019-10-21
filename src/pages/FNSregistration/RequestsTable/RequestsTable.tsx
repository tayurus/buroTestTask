import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./RequestsTable.scss";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("requests-table");

export class RequestsTable extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div className={b()}></div>;
  }
}
