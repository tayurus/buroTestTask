import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import { connect } from "react-redux";
import { Breadcrumb, Button, Radio, Upload, Icon, Divider } from "antd";
import "./Main.scss";
import { Input, Steps } from "./../../components";
import { formActions } from "./../../actions";

const { Dragger } = Upload;

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("main-page");

class Main extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch(formActions.changeStep());
  // }

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
    const { currentStep, isStepLoading, changeStep } = this.props;
    console.log("main here, changeStep = ", changeStep);

    const generateButton = (title: string) => {
      return (
        <React.Fragment>
          <Button className={b("btn")} onClick={changeStep} disabled={isStepLoading ? true : false}>
            {title}
          </Button>
          {isStepLoading ? <Icon type="loading" /> : ""}
        </React.Fragment>
      );
    };

    const steps = [
      {
        title: "Заполнение",
        subTitle: "Описание",
        description: generateButton("Выпустить КЭП")
      },
      {
        title: "Выпуск КЭП",
        subTitle: "Описание",
        description: generateButton("Подписать")
      },
      {
        title: "Подписание",
        subTitle: "Описание",
        description: generateButton("Отправить в ФНС")
      },
      {
        title: "Отправка в ФНС",
        subTitle: "Описание",
        description: generateButton("Далее")
      },
      {
        title: "Регистрация в ФНС",
        subTitle: "Описание",
        description: generateButton("Далее")
      }
    ];
    return (
      <aside className={b("aside")}>
        <Steps currentStep={currentStep} steps={steps} />
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

function mapStateToProps(state: any) {
  const { currentStep, isStepLoading } = state.form;
  return {
    currentStep,
    isStepLoading
  };
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    changeStep: () => {
      dispatch(formActions.changeStep());
      setTimeout(() => dispatch(formActions.stepLoaded()), 2000);
    }
  };
};

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export { connectedComponent as Main };
