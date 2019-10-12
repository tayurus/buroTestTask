import { formConstants } from "./../constants";

export const formActions = {
  changeStep,
  stepLoaded
};

function changeStep() {
  return { type: formConstants.STEP_CHANGED };
}

function stepLoaded() {
  return { type: formConstants.STEP_LOAD_SUCCESS };
}
