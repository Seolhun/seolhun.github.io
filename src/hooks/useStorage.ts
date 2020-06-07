const ROOT_KEY: string = '__SEOLHUN__';
type LocalStorageKeys = 'THEME';

const useStorage = () => {
  const getRootStorage = () => {
    if (typeof localStorage === 'undefined' || !localStorage) {
      return;
    }

    const rootItem: any = localStorage.getItem(ROOT_KEY);
    if (rootItem) {
      return JSON.parse(rootItem);
    }
    return null;
  };

  const getItem = (key: LocalStorageKeys) => {
    const rootItem: any = getRootStorage();
    if (rootItem) {
      if (rootItem[key]) {
        return rootItem[key];
      }
      return rootItem;
    }
    return {};
  };

  const setItem = (key: LocalStorageKeys, value: any) => {
    if (typeof localStorage === 'undefined' || !localStorage) {
      return;
    }

    const rootItem = getRootStorage();
    const overridingRootItem = {
      ...rootItem,
      [key]: value,
    };
    localStorage.setItem(ROOT_KEY, JSON.stringify(overridingRootItem));
    return overridingRootItem;
  };

  const removeItem = (key: LocalStorageKeys) => {
    if (typeof localStorage === 'undefined' || !localStorage) {
      return;
    }

    const rootItem = getItem(key);
    if (!rootItem[key]) {
      return false;
    }
    delete rootItem[key];
    localStorage.setItem(ROOT_KEY, rootItem);
    return true;
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export {
  useStorage,
};

export default useStorage;
