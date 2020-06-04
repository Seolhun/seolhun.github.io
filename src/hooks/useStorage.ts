const ROOT_KEY: string = '__SEOLHUN__';
type LocalStorageKeys = 'THEME';

export const useStorage = () => {
  if (typeof localStorage === 'undefined') {
    return null;
  }

  const getRootStorage = () => {
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
    const rootItem = getRootStorage();
    const overridingRootItem = {
      ...rootItem,
      [key]: value,
    };
    localStorage.setItem(ROOT_KEY, JSON.stringify(overridingRootItem));
    return overridingRootItem;
  };

  const removeItem = (key: LocalStorageKeys) => {
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

export default useStorage;
