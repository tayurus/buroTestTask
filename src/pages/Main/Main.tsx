import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import { connect } from "react-redux";
import { Breadcrumb, Button, Radio, Upload, Icon, Divider, Steps } from "antd";
import "./Main.scss";
import { Input } from "./../../components";

const { Dragger } = Upload;
const { Step } = Steps;

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("main-page");

class Main extends Component {
  constructor(props: Object) {
    super(props);
  }

  renderNalogRadio = () => {
    return (
      <Radio.Group>
        <Radio value={"osno"}>ОСНО</Radio>
        <Radio value={"usn"}>УСН (Доходы)</Radio>
      </Radio.Group>
    );
  };

  renderFileInputs = () => {
    return (
      <div className={b("files")}>
        <h3 className={b("files-title")}>
          Загрузка <br /> документов
        </h3>
        <div className={b("dragger")}>
          <Dragger>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Скан паспорта</p>
            <p className="ant-upload-hint">Перетяните файлы в эту область </p>
          </Dragger>
        </div>

        <div className={b("dragger")}>
          <Dragger>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Скан прописки</p>
            <p className="ant-upload-hint">Перетяните файлы в эту область </p>
          </Dragger>
        </div>

        <div className={b("dragger")}>
          <Dragger>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Скан СНИЛС</p>
            <p className="ant-upload-hint">Перетяните файлы в эту область </p>
          </Dragger>
        </div>
      </div>
    );
  };

  renderBreadcrumbs = () => {
    return (
      <div className={b("breadcrumbs")}>
        <Button icon="arrow-left" className={b("back")}>
          Назад в панель управления
        </Button>
        <Breadcrumb>
          <Breadcrumb.Item>Breadcrumb link</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Breadcrumb link</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Breadcrumb link</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Breadcrumb link</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  };

  renderAside = () => {
    const steps = [
      {
        title: "Заполнение",
        description: "Описание"
      },
      {
        title: "Выпуск КЭП",
        description: "Описание"
      },
      {
        title: "Подписание",
        description: "Описание"
      },
      {
        title: "Отправка в ФНС",
        description: "Описание"
      },
      {
        title: "Регистрация в ФНС",
        description: "Описание"
      }
    ];
    return (
      <aside className={b("aside")}>
        <Steps direction="vertical" size="small" current={0}>
          {steps.map((stepData, key) => (
            <Step title={stepData.title} description={stepData.description} />
          ))}
        </Steps>
      </aside>
    );
  };

  render() {
    return (
      <div className={b()}>
        <div className={b("content-inner")}>
          {this.renderAside()}

          <div className={b("wrapper")}>
            {this.renderBreadcrumbs()}
            <div className={b("section-wrapper")}>
              <section className={b("section")}>
                <h2 className={b("title")}>Контакты и общая информация</h2>
                <div className={b("inputs-grid")}>
                  <Input title="Фамилия" tip="обязательное поле!" />
                  <Input title="Имя" tip="обязательное поле!" />
                  <Input title="Отчество" tip="обязательное поле!" />
                  <Input title="Номер телефона" tip="обязательное поле!" />
                  <Input title="Электронная почта" tip="обязательное поле!" />
                </div>

                <div className={b("radio")}>
                  <label className={b("radio-title")}>Налоговый режим</label>
                  {this.renderNalogRadio()}
                </div>

                <Divider />
              </section>

              {this.renderFileInputs()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: Object) {}

const connectedComponent = connect(
  mapStateToProps,
  null
)(Main);

export { connectedComponent as Main };
