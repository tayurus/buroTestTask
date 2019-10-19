import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./Registration.scss";
import { AInput, AAutoComplete, ADatePicker, ARadio, ARadioGroup, ATextArea } from "src/helpers";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import warn from "./warn";

import { formName } from "./constants";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const sf = cn("site-form");
const b = cn("registration-form");

class RegistrationForm extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${sf()} ${b()}`}>
        <div className={sf("section-wrapper")}>
          <section className={sf("section")}>
            <div className={`${sf("inputs-grid")} ${b("inputs-grid")}`}>
              <Field title="Номер паспорта" tip="обязательное поле!" name="passportNumber" component={AInput} />
            </div>
          </section>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state: any) => {
  // const autoCompleteData = state.input.autoCompleteData[formName] || {};
  // return { autoCompleteData };
};

const connectedComponent = connect(
  mapStateToProps,
  null
)(
  reduxForm({
    form: formName,
    validate,
    warn
  })(RegistrationForm)
);

export { connectedComponent as RegistrationForm };
