import { baseURL } from "src/constants";
import { handleResponse } from "src/helpers";

function getAutoComplete() {
  console.log("getAutoComplete service");

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };
  const query = baseURL + "/secondNameAutoComplete";

  return fetch(query, requestOptions).then(handleResponse);
}

export const inputService = {
  getAutoComplete
};
