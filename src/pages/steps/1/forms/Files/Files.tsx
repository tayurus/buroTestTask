import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./Files.scss";
import { ADragger } from "src/helpers";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import validate from "./validate";
import warn from "./warn";

import { formName } from "./constants";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const sf = cn("site-form");
const b = cn("file-form");

class FilesForm extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${sf()} ${b()}`}>
        <div className={sf("files")}>
          <h3 className={sf("files-title")}>
            Загрузка <br /> документов
          </h3>
          <div className={sf("dragger")}>
            <Field title="Скан паспорта" tip="Перетяните файлы в эту область" name="passport" component={ADragger} />
          </div>
          <div className={sf("dragger")}>
            <Field
              title="Скан прописки"
              tip="Перетяните файлы в эту область"
              name="registration"
              component={ADragger}
            />
          </div>
          <div className={sf("dragger")}>
            <Field title="Скан СНИЛС" tip="Перетяните файлы в эту область" name="SNILS" component={ADragger} />
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const connectedComponent = connect(
  mapStateToProps,
  null
)(
  reduxForm({
    form: formName,
    validate,
    warn
  })(FilesForm)
);

export { connectedComponent as FilesForm };
