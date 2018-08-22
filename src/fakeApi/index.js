export const getData = async key => {
  try {
    const data = await JSON.parse(localStorage.getItem(key));
    return data;
  } catch (e) {
    const error = await JSON.parse(localStorage.getItem("errors"));
    return error;
  }
};

export const setData = async (key, data) => {
  try {
    await localStorage.setItem(key, data);
    await localStorage.setItem("errors", null);
  } catch (e) {
    await localStorage.setItem(key, "Can not save data");
    await localStorage.setItem("errors", "oops, we can not save data");
  }
};
