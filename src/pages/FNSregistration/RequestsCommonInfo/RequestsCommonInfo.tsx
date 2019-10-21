import React from "react";
import { withNaming } from "@bem-react/classname";
import "./RequestsCommonInfo.scss";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("requests-common-info");

interface Props {
  balance: number;
  total: number;
  processing: number;
  ended: number;
  archive: number;
}

export const RequestsCommonInfo = (props: Props) => {
  const { balance, total, processing, ended, archive } = props;
  return (
    <div className={b()}>
      <h2 className={b("title")}>Заявки</h2>
      <div className={b("data")}>
        <div className={b("data-wrapper", { balance: true })}>
          <span className={b("label")}>Баланс</span>
          <span className={b("value")}>{balance} ₽</span>
        </div>

        <div className={b("data-wrapper")}>
          <span className={b("value")}>{total}</span>
          <span className={b("label")}>Всего</span>
        </div>

        <div className={b("data-wrapper")}>
          <span className={b("value")}>{processing}</span>
          <span className={b("label")}>На регистрации</span>
        </div>

        <div className={b("data-wrapper")}>
          <span className={b("value")}>{ended}</span>
          <span className={b("label")}>Завершено</span>
        </div>

        <div className={b("data-wrapper")}>
          <span className={b("value")}>{archive}</span>
          <span className={b("label")}>В архиве</span>
        </div>
      </div>
    </div>
  );
};
