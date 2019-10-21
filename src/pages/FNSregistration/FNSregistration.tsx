import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./FNSregistration.scss";

import { Tabs } from "antd";
import { connect } from "react-redux";

import { RequestsCommonInfo } from "./RequestsCommonInfo/RequestsCommonInfo";

const { TabPane } = Tabs;

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("fns-registration");

const commonInfo = {
  balance: 400000,
  total: 2,
  processing: 6,
  ended: 8,
  archive: 1
};

const tabs = ["Все заявки", "Регистрация ООО", "Регистрация ИП", "Изменения в ИП", "Закрытие ИП"];

class FNSregistration extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  renderTabs = (tabs: Array<any>) => {
    return (
      <Tabs type="card">
        {tabs.map((title: string, key: number) => (
          <TabPane tab={title} key={key.toString()}>
            {title}
          </TabPane>
        ))}
      </Tabs>
    );
  };

  render() {
    return (
      <div className={b()}>
        <RequestsCommonInfo {...commonInfo} />
        {this.renderTabs(tabs)}
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
