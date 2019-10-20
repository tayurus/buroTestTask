import React from "react";
import { withNaming } from "@bem-react/classname";
import "./ActivityOption.scss";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("activity-option");

interface Props {
  activityCode: string;
  activityTitle: string;
  onRemove(): void;
  isStarFilled: boolean;
}

export const ActivityOption = (props: Props) => {
  const { activityCode, activityTitle, onRemove, isStarFilled } = props;
  return (
    <div className={b()}>
      <div className={b("star", { filled: isStarFilled })}></div>
      <div className={b("cross")} onClick={onRemove}></div>
      <div className={b("activity-code")}>{activityCode}</div>
      <div className={b("activity-title")}>{activityTitle}</div>
    </div>
  );
};

ActivityOption.defaultProps = {
  activityCode: "код деятельности неизвестен",
  activityTitle: "название деятельности неизвестно",
  isStarFilled: false,
  onRemove: () => {}
};
