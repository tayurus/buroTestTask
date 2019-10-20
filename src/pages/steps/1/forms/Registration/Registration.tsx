import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./Registration.scss";
import { AInput } from "src/helpers";
import { Icon } from "antd";
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
            <h2 className={sf("title")}>Адрес регистрации</h2>
            <div className={`${sf("inputs-grid")} ${b("inputs-grid")}`}>
              <div className={b("address")}>
                <Field
                  placeholder="Введите адрес в свободной форме"
                  name="address"
                  suffix={<Icon type="search" style={{ color: "rgba(0,0,0,.45)" }} />}
                  component={AInput}
                />
              </div>

              <Field title="Индекс" tip="обязательное поле!" name="postcode" component={AInput} />
              <Field title="Код региона" tip="обязательное поле!" name="regionCode" component={AInput} />
              <Field title="Код регистр. органа" tip="обязательное поле!" name="registerCode" component={AInput} />

              <Field title="Район" tip="обязательное поле!" name="district" component={AInput} />
              <div className={b("districtName")}>
                <Field title="Наименование района" tip="обязательное поле!" name="districtName" component={AInput} />
              </div>

              <Field title="Населенный пункт" tip="обязательное поле!" name="locality" component={AInput} />
              <div className={b("localityName")}>
                <Field
                  title="Наименование населенного пункта"
                  tip="обязательное поле!"
                  name="localityName"
                  component={AInput}
                />
              </div>

              <Field title="Улица" tip="обязательное поле!" name="street" component={AInput} />
              <div className={b("streetName")}>
                <Field title="Наименование улицы" tip="обязательное поле!" name="streetName" component={AInput} />
              </div>

              <Field title="Дом" tip="обязательное поле!" name="house" component={AInput} />
              <Field title="Номер дома" tip="обязательное поле!" name="houseNumber" component={AInput} />
              <Field title="Корпус" tip="обязательное поле!" name="building" component={AInput} />

              <Field title="Номер корпуса" tip="обязательное поле!" name="buildingNumber" component={AInput} />
              <Field title="Квартира" tip="обязательное поле!" name="flat" component={AInput} />
              <Field title="Номер квартиры" tip="обязательное поле!" name="flatNumber" component={AInput} />
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
