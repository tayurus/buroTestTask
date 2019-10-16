import React from "react";
import { withNaming } from "@bem-react/classname";
import "./Steps.scss";

import { Steps as AntdSteps } from "antd";
const { Step } = AntdSteps;

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-steps");

interface StepInfo {
  title: string;
  subTitle: string;
  description: React.ReactNode;
}

interface Props {
  steps: Array<StepInfo>;
  currentStep: number;
}

export const Steps = (props: Props) => {
  const { steps, currentStep } = props;

  return (
    <AntdSteps direction="vertical" size="small" current={currentStep} className={b()}>
      {steps.map((stepData, index) => (
        <Step
          title={stepData.title}
          description={index === currentStep ? stepData.description : ""}
          subTitle={stepData.subTitle}
        ></Step>
      ))}
    </AntdSteps>
  );
};
