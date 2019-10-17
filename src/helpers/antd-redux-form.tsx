/*
Тут описывается обертка вокруг antd-компонентов, чтобы связать их с redux-form
Взято отсюда - https://codesandbox.io/s/jzyl70wpk
*/
import React from "react";
import { Input, Select, AutoComplete } from "src/components";

const makeField = (Component: any) => ({ input, meta, children, hasFeedback, label, ...rest }: any) => {
  return <Component {...input} {...rest} children={children} />;
};

export const AInput = makeField(Input);
export const AAutoComplete = makeField(AutoComplete);
export const ASelect = makeField(Select);
