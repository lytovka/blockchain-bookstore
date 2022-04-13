/**
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 */
function localStorageAvailable() {
  let storage: typeof window.localStorage | undefined = undefined;
  try {
    storage = window['localStorage'];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

const inMemoryLocalStorage: Record<string, string | null> = {};

export const tryLocalStorageGetItem: typeof window.localStorage.getItem = (
  key: string
) => {
  if (window.navigator.cookieEnabled && localStorageAvailable())
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      console.error(e);
      return inMemoryLocalStorage[key] ?? null;
    }
  return inMemoryLocalStorage[key] ?? null;
};

export const tryLocalStorageSetItem: typeof window.localStorage.setItem = (
  key: string,
  value: string
) => {
  if (window.navigator.cookieEnabled && localStorageAvailable())
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
      inMemoryLocalStorage[key] = value;
    }
  inMemoryLocalStorage[key] ?? null;
};
