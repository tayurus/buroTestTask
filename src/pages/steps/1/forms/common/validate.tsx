import { inputActions } from "src/actions";
import { store } from "src/helpers";
import { formName } from "./constants";

export default function validate(values: any, dispatch: any): any {
  /* заберем из store название последнего  измененого inputа и узнаем, нужно ли грузить ему autocomlete варианты */
  const { lastChangedField } = store.getState().input;
  if (lastChangedField) {
    dispatch.dispatch(inputActions.loadAutoComplete(formName, lastChangedField));
  }
}
