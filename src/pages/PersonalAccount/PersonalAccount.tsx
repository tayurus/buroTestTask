import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./PersonalAccount.scss";

import { NavMenu } from "src/components";
import { connect } from "react-redux";
import { navMenuItems } from "src/constants";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("personal-account-page");

class PersonalAccount extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={b()}>
        <NavMenu navMenuItems={navMenuItems} />
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
)(PersonalAccount);

export { connectedComponent as PersonalAccount };
