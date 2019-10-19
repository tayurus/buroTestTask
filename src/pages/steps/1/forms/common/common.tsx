import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./Common.scss";
import { AInput, AAutoComplete, ADragger, ARadio, ARadioGroup } from "src/helpers";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import validate from "./validate";
import warn from "./warn";

import { formName } from "./constants";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const sf = cn("site-form");
const b = cn("common-form");

class CommonForm extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  renderNalogRadio = () => {
    return (
      <div>
        <Field name="q" component={ARadioGroup} buttonStyle="solid">
          <Field type="radio" name="taxMode" value="osno" title="ОСНО" component={ARadio} />
          <Field type="radio" name="taxMode" value="usn" title="УСН (Доходы)" component={ARadio} />
        </Field>
      </div>
    );
  };

  render() {
    const { handleSubmit, autoCompleteData } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${sf()} ${b()}`}>
        <div className={sf("section-wrapper")}>
          <section className={sf("section")}>
            <h2 className={sf("title")}>Контакты и общая информация</h2>
            <div className={sf("inputs-grid")}>
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

            <div className={sf("radio")}>
              <label className={sf("radio-title")}>Налоговый режим</label>
              {this.renderNalogRadio()}
            </div>
          </section>
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
