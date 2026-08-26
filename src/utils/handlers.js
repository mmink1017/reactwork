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
    //대기타임설정
    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, interval);
  };
};
// 제네레이터 -> 번호 부여
export const numberGenerator = function* (title) {
  let count = 0;
  while (true) {
    yield `${title}_${++count}`;
  }
};
