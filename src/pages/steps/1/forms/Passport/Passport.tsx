import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./Passport.scss";
import { AInput, AAutoComplete, ADatePicker, ARadio, ARadioGroup, ATextArea } from "src/helpers";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Radio } from "antd";
import validate from "./validate";
import warn from "./warn";

import { formName } from "./constants";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const sf = cn("site-form");
const pf = cn("passport-form");

class PassportForm extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${sf()} ${pf()}`}>
        <div className={sf("section-wrapper")}>
          <section className={sf("section")}>
            <div className={pf("row")}>
              <h2 className={sf("title")}>Паспорт</h2>
              <Field name="citizenship" component={ARadioGroup}>
                <div className={pf("row")}>
                  <Field
                    type="radio"
                    name="citizenship"
                    isButton={true}
                    value="RF"
                    title="Гражданин РФ"
                    component={ARadio}
                  />
                  <Field
                    type="radio"
                    name="citizenship"
                    isButton={true}
                    value="FOREIGN"
                    title="Иностранный гражданин"
                    component={ARadio}
                  />
                </div>
              </Field>
            </div>

            <div className={`${sf("inputs-grid")} ${pf("inputs-grid")}`}>
              <Field title="Номер паспорта" tip="обязательное поле!" name="passportNumber" component={AInput} />
              <Field
                title="Дата выдачи"
                tip="обязательное поле!"
                name="passportGetDate"
                component={ADatePicker}
                onFocus={(e: any) => e.preventDefault()}
                onBlur={(e: any) => e.preventDefault()}
              />
              <Field title="Код подразделения" tip="обязательное поле!" name="subUnitCode" component={AInput} />
              <div className={pf("getSource")}>
                <Field title="Кем выдан" tip="обязательное поле!" name="getSource" component={ATextArea} />
              </div>
              <Field
                title="Дата Рождения"
                tip="обязательное поле!"
                name="bornDate"
                component={ADatePicker}
                onFocus={(e: any) => e.preventDefault()}
                onBlur={(e: any) => e.preventDefault()}
              />
              <div className={pf("bornPlace")}>
                <Field title="Место рождения" tip="обязательное поле!" name="bornPlace" component={AInput} />
              </div>
              <Field title="СНИЛС" tip="обязательное поле!" name="SNILS" component={AInput} />
              <Field title="ИНН" tip="обязательное поле!" name="INN" component={AInput} />
            </div>
            <Field name="sex" title="Пол" component={ARadioGroup}>
              <div className={pf("row")}>
                <Field type="radio" name="sex" value="male" title="Мужчина" component={ARadio} />
                <Field type="radio" name="sex" value="female" title="Женщина" component={ARadio} />
              </div>
            </Field>
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
  })(PassportForm)
);

export { connectedComponent as PassportForm };
