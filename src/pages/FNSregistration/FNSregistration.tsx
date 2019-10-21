import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./FNSregistration.scss";

import { connect } from "react-redux";

import { RequestsCommonInfo } from "./RequestsCommonInfo/RequestsCommonInfo";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("fns-registration");

class FNSregistration extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const commonInfo = {
      balance: 400000,
      total: 2,
      processing: 6,
      ended: 8,
      archive: 1
    };

    return (
      <div className={b()}>
        <RequestsCommonInfo {...commonInfo} />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}

const mapDispatchToProps = (dispatch: Function) => {
  return {};
};

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FNSregistration);

export { connectedComponent as FNSregistration };
