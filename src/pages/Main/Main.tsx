import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./Main.scss";
import "./../steps/Steps.scss";

import "./../steps/1/forms/Forms.scss";
import { Steps, Breadcrumbs } from "src/components";
import { connect } from "react-redux";
import { Step1 } from "src/pages/steps";
import { Button, Icon } from "antd";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("main-page");

const breadcrumbsData = {
  backLabel: "Назад в панель управления",
  items: [{ text: "Регистрация в ФНС", href: "#" }, { text: "Регистрация ООО" }]
};

class Main extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  renderAside = () => {
    const { currentStep, isStepLoading, changeStep } = this.props;

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
            <Breadcrumbs {...breadcrumbsData} className={b("breadcrumbs")} />
            <Step1 />
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
//
// const mapDispatchToProps = (dispatch: Function) => {
//   return {
//     changeStep: () => {
//       dispatch(formActions.changeStep());
//       setTimeout(() => dispatch(formActions.stepLoaded()), 2000);
//     }
//   };
// };

const connectedComponent = connect(
  mapStateToProps,
  null
)(Main);

export { connectedComponent as Main };
