/*
Тут описывается обертка вокруг antd-компонентов, чтобы связать их с redux-form
Взято отсюда - https://codesandbox.io/s/jzyl70wpk
*/
import React from "react";
import { Input, Select, AutoComplete, Dragger, Radio, RadioGroup } from "src/components";

const makeField = (Component: any) => ({ input, meta, children, hasFeedback, label, ...rest }: any) => {
  return <Component {...input} {...rest} meta={meta} children={children} />;
};

export const AInput = makeField(Input);
export const AAutoComplete = makeField(AutoComplete);
export const ASelect = makeField(Select);
export const ADragger = makeField(Dragger);
export const ARadio = makeField(Radio);
export const ARadioGroup = makeField(RadioGroup);
