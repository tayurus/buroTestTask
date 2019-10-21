import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./FNSregistration.scss";

import { Tabs, Input, Button, Select, Divider } from "antd";
import { connect } from "react-redux";

import { RequestsCommonInfo } from "./RequestsCommonInfo/RequestsCommonInfo";

const { TabPane } = Tabs;
const { Option } = Select;

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

  handleTabChange = (tabIndex: string) => {
    console.log(tabIndex);
  };

  handleSearchChange = (query: string) => {
    console.log(query);
  };

  handleShowedTableRows = (val: string) => {
    console.log("val = ", val);
  };

  renderTabs = (tabs: Array<any>) => {
    return (
      <Tabs onChange={this.handleTabChange} type="card">
        {tabs.map((title: string, key: number) => (
          <TabPane tab={title} key={key.toString()}>
            {title}
          </TabPane>
        ))}
      </Tabs>
    );
  };

  renderControls = () => {
    return (
      <div className={b("contorls")}>
        <Input
          placeholder="Можно ввести ФИО ИП или наименование ООО"
          className={b("search")}
          onChange={(e: any) => this.handleSearchChange(e.target.value)}
        />

        <div className={b("control-items")}>
          <Button icon="copy" className={b("control")}>
            Копировать
          </Button>
          <Button icon="delete" className={b("control")}>
            Удалить
          </Button>
          <Button icon="download" className={b("control")}>
            Выгрузить счет
          </Button>
          <Select
            defaultValue="20"
            style={{ width: 113 }}
            onChange={this.handleShowedTableRows}
            className={b("control")}
          >
            <Option value="20">20 заявок</Option>
            <Option value="40">40 заявок</Option>
            <Option value="80">80 заявок</Option>
          </Select>
          <div className={b("controls-divider")} />
          <Button icon="filter" className={b("button-filter")}></Button>
          <Button icon="more"></Button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={b()}>
        <RequestsCommonInfo {...commonInfo} />
        <div className={b("content")}>
          {this.renderTabs(tabs)}
          {this.renderControls()}
        </div>
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
