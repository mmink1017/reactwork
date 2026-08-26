export const eventHandler = (e, setValue) => {
  console.log(e);
  console.log("js파일에 선언된 함수");
  if (setValue) setValue("js파일에 있는 함수에서 수정");
};
export const debouncer = (actor = () => {}, wait = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      actor(...args);
    }, wait);
  };
};
export const trottling = (actor = () => {}, interval = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) return;
    actor(...args);
    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, interval);
  };
};
