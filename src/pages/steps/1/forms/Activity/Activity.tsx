import React, { Component } from "react";
import { withNaming } from "@bem-react/classname";
import "./Activity.scss";
import { connect } from "react-redux";
import { Button } from "antd";
import { ActivityOption } from "src/components";
const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("activity-form");
const sf = cn("site-form");

class ActivityForm extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={b()}>
        <div className={sf("section-wrapper")}>
          <section className={sf("section")}>
            <h2 className={sf("title")}>Виды деятельности</h2>

            <Button type="primary" size="large" className={b("OKVED-btn")}>
              Выбрать ОКВЭД
            </Button>

            <div className={b("tip")}>
              <div className={b("tip-star")}></div>
              <div className={b("tip-text")}>Выберите основной вид деятельности из списка</div>
            </div>

            <div className={b("selected-activity")}>
              <ActivityOption activityCode="2.20" activityTitle="Лесозаготовки" isStarFilled={true} />
            </div>

            <h3 className={sf("subtitle")}>Дополнительные виды деятельности</h3>

            <div className={b("additional-activities")}>
              <ActivityOption
                activityCode="2.20"
                activityTitle="Добыча и обогащение бурого угля (лигнита)"
                isStarFilled={false}
              />
              <ActivityOption
                activityCode="2.20"
                activityTitle="Сбор и заготовка пищевых лесных ресурсов, недревесных лесных ресурсов и лекарственных растений"
                isStarFilled={false}
              />
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
)(ActivityForm);

export { connectedComponent as ActivityForm };
