import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import { Breadcrumb, Button, Radio, Upload, Icon, Form } from "antd";
import "./Main.scss";
import { AInput } from "src/helpers";

import { Field, reduxForm } from "redux-form";

import validate from "./validate";

const { Dragger } = Upload;

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("common-form");

class Main extends Component<any> {
  constructor(props: any) {
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

  render() {
    const { handleSubmit } = this.props;

    // return (
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="firstName">First Name</label>
    //       <Field name="firstName" component="input" type="text" />
    //     </div>
    //     <div>
    //       <label htmlFor="lastName">Last Name</label>
    //       <Field name="lastName" component="input" type="text" />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <Field name="email" component="input" type="email" />
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // );

    return (
      <Form onSubmit={handleSubmit} className={b()}>
        <div className={b("section-wrapper")}>
          <section className={b("section")}>
            <h2 className={b("title")}>Контакты и общая информация</h2>
            <div className={b("inputs-grid")}>
              <Field title="Имя" tip="сука" name="firstName" component={AInput} placeholder="First Name" hasFeedback />
            </div>

            <div className={b("radio")}>
              <label className={b("radio-title")}>Налоговый режим</label>
              {this.renderNalogRadio()}
            </div>

            <Divider />
          </section>

          {this.renderFileInputs()}
        </div>
      </Form>
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

// const connectedComponent = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Main);
//
// export { connectedComponent as Main };

const connectedComponent = reduxForm({
  form: "contact",
  validate
})(Main);

export { connectedComponent as Main };

// <Input title="Имя" tip="обязательное поле!" />
// <Input title="Отчество" tip="обязательное поле!" />
// <Input title="Номер телефона" tip="обязательное поле!" />
// <Input title="Электронная почта" tip="обязательное поле!" />
