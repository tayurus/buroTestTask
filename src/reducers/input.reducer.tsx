import { inputConstants } from "src/constants/index";

const initialState = {
  lastChangedForm: "",
  lastChangedField: "",
  autoCompleteData: {}
};

export function input(state = initialState, action: any) {
  let field = "",
    form = "";
  if (action.meta) {
    field = action.meta.field;
    form = action.meta.form;
  }
  switch (action.type) {
    case "@@redux-form/CHANGE":
      return {
        ...state,
        lastChangedForm: form,
        lastChangedField: field
      };

    case inputConstants.AUTOCOMPLETE_LOAD_SUCCESS: {
      const { form, inputName } = action;
      return {
        ...state,
        autoCompleteData: { ...state.autoCompleteData, [form]: { [inputName]: action.data } }
      };
    }

    default:
      return state;
  }
}
