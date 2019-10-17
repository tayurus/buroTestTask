import { inputConstants } from "src/constants/index";

import { inputService } from "src/services";

function loadAutoComplete(form: string, inputName: string) {
  return (dispatch: any) => {
    dispatch(request());

    inputService.getAutoComplete().then(
      data => {
        dispatch(success(data));
      },
      error => {
        dispatch(failure(error));
      }
    );

    function request() {
      return { type: inputConstants.AUTOCOMPLETE_LOAD };
    }
    function success(data: any) {
      return { type: inputConstants.AUTOCOMPLETE_LOAD_SUCCESS, data, form, inputName };
    }
    function failure(error: any) {
      return { type: inputConstants.AUTOCOMPLETE_LOAD_FAILED, error };
    }
  };
}

export const inputActions = {
  loadAutoComplete
};
