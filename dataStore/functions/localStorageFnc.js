export default function localStorageFnc(data, localStorageKey, StateFnc) {
  if (data) {
      localStorage.setItem(localStorageKey, JSON.stringify(data));
     return StateFnc(JSON.parse(localStorage.getItem(localStorageKey)));
    } else if (localStorage.getItem(localStorageKey) !== undefined) {
     return StateFnc(JSON.parse(localStorage.getItem(localStorageKey)));
    }

}