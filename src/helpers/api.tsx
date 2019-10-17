export const handleResponse = (response: any) => {
  if (response.statusText !== "OK") {
    const error = response.statusText;
    return Promise.reject(error);
  }

  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);
    return data;
  });
};
