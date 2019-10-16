import { formActions } from "./../../actions";

export default function validate(values: any, dispatch: any): any {
  dispatch.dispatch(formActions.changeStep());
  console.log("values = ", values);
  console.log("dispatch = ", dispatch);
}
