import { formConstants } from "./../constants";

const initialState = {
  currentStep: 0,
  isStepLoading: false
};

export function form(state = initialState, action: any) {
  console.log("form reducer here, action = ", action);
  switch (action.type) {
    case formConstants.STEP_CHANGED:
      return {
        ...state,
        isStepLoading: true
      };
    case formConstants.STEP_LOAD_SUCCESS:
      return {
        ...state,
        isStepLoading: false,
        currentStep: (state.currentStep + 1) % 5
      };
    default:
      return state;
  }
}
