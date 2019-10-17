import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import { Radio, Upload, Icon } from "antd";
import "./Common.scss";
import { AInput, AAutoComplete } from "src/helpers";

import { Field, reduxForm } from "redux-form";

import validate from "./validate";

const { Dragger } = Upload;

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("common-form");

class CommonForm extends Component<any> {
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
                options={[{ val: "shit", title: "shitTitle" }]}
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

const connectedComponent = reduxForm({
  form: "s1common",
  validate
})(CommonForm);

export { connectedComponent as CommonForm };
