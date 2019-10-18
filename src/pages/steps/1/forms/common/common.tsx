import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./Common.scss";
import { AInput, AAutoComplete, ADragger, ARadio, ARadioGroup } from "src/helpers";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Radio } from "antd";

import validate from "./validate";
import warn from "./warn";

import { formName } from "./constants";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("common-form");

class CommonForm extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  renderNalogRadio = () => {
    return (
      <div>
        <Field name="q" component={ARadioGroup} buttonStyle="solid">
          <Field type="radio" name="q" value="osno" title="ОСНО" component={ARadio} />
          <Field type="radio" name="q" value="usn" title="УСН (Доходы)" component={ARadio} />
        </Field>
      </div>
    );
  };

  renderFileInputs = () => {
    return (
      <div className={b("files")}>
        <h3 className={b("files-title")}>
          Загрузка <br /> документов
        </h3>
        <div className={b("dragger")}>
          <Field title="Скан паспорта" tip="Перетяните файлы в эту область" name="passport" component={ADragger} />
        </div>
        <div className={b("dragger")}>
          <Field title="Скан прописки" tip="Перетяните файлы в эту область" name="registration" component={ADragger} />
        </div>
        <div className={b("dragger")}>
          <Field title="Скан СНИЛС" tip="Перетяните файлы в эту область" name="SNILS" component={ADragger} />
        </div>
      </div>
    );
  };

  render() {
    const { handleSubmit, autoCompleteData } = this.props;
    console.log("props = ", this.props);
    return (
      <form onSubmit={handleSubmit} className={b()}>
        <div className={b("section-wrapper")}>
          <section className={b("section")}>
            <h2 className={b("title")}>Контакты и общая информация</h2>
            <div className={b("inputs-grid")}>
              <Field
                title="Фамилия"
                tip="обязательное поле!"
                name="secondName"
                options={autoCompleteData["secondName"] || []}
                component={AAutoComplete}
              />
              <Field title="Имя" tip="обязательное поле!" name="firstName" component={AInput} />
              <Field title="Отчество" tip="обязательное поле!" name="patronymic" component={AInput} />
              <Field title="Номер телефона" tip="обязательное поле!" name="phone" component={AInput} />
              <Field title="Электронная почта" tip="обязательное поле!" name="email" component={AInput} />
            </div>

            <div className={b("radio")}>
              <label className={b("radio-title")}>Налоговый режим</label>
              {this.renderNalogRadio()}
            </div>
          </section>

          {this.renderFileInputs()}
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state: any) => {
  const autoCompleteData = state.input.autoCompleteData[formName] || {};
  return { autoCompleteData };
};

const connectedComponent = connect(
  mapStateToProps,
  null
)(
  reduxForm({
    form: formName,
    validate,
    warn
  })(CommonForm)
);

export { connectedComponent as CommonForm };
