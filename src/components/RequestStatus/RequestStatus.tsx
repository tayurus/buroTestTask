import React from "react";
import { withNaming } from "@bem-react/classname";
import "./RequestStatus.scss";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("request-status");

const statusObject = {
  KEPready: { color: "orange", text: "Выпущена КЭП" },
  reject: { color: "red", text: "Отказ в регистрации" },
  sentToFNS: { color: "blue", text: "Отправлен в ФНС" },
  registered: { color: "green", text: "Зарегистрирован" },
  filling: { color: "orange", text: "Заполнение" },
  signing: { color: "orange", text: "Заполнение" },
  unknown: { color: "red", text: "Неизвестен" }
};

export const RequestStatus = (props: any) => {
  const { status, className } = props;
  return <span></span>;
  // return <span className={`${b({ [status]: true })} ${className}`}>{statusObject[status].color}</span>;
};

RequestStatus.defaultProps = {
  status: "unknown",
  className: ""
};
