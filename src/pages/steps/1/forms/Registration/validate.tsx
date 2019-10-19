import { inputActions } from "src/actions";
import { store } from "src/helpers";
import { formName } from "./constants";

// список полей, которым нужен запрос на сервер при изменении
const serverRequestNeededFields = ["secondName"];

export default function validate(values: any, dispatch: any): any {
  // ошибки для валидации
  const errors: any = {};

  if (!values.secondName) {
    errors["secondName"] = "Ну заполни плис!";
  }

  /* заберем из store название последнего  измененого inputа и узнаем, нужно ли грузить ему autocomlete варианты */
  const { lastChangedField } = store.getState().input;

  // если пользователь что-то ввел в поле и это поле есть в списке полей, которым нужно обратиться к серверу
  if (lastChangedField && serverRequestNeededFields.indexOf(lastChangedField) !== -1) {
    dispatch.dispatch(inputActions.loadAutoComplete(formName, lastChangedField));
  }

  return errors;
}
