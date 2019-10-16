import { formConstants } from "src/constants/index";

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
