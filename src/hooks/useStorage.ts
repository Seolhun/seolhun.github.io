const ROOT_KEY: string = '__SEOLHUN__';
enum LocalStorageKeys {
  THEME = 'THEME',
  MAIN_COLOR = 'MAIN_COLOR'
}

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

  const getItem = (key: keyof typeof LocalStorageKeys) => {
    const rootItem: any = getRootStorage();
    if (rootItem && rootItem[key]) {
      return rootItem[key];
    }
    return null;
  };

  const setItem = (key: keyof typeof LocalStorageKeys, value: any) => {
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

  const removeItem = (key: keyof typeof LocalStorageKeys) => {
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
