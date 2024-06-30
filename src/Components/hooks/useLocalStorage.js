import { useState, useEffect } from "react";

const useLocalStorage = (initialKey = null) => {
  const [localData, setLocalData] = useState(null);
  const [isLocalDataEmpty, setIsLocalDataEmpty] = useState(false);
  const [key, setKey] = useState(initialKey);

  const resetLocalData = () => {
    localStorage.clear();
  };

  const handleLocalData = (newKey, value) => {
    if (newKey !== null && value) {
      localStorage.setItem(newKey, value);
      if (newKey === key) {
        setLocalData(value);
      }
    }
  };

  const getData = (localStorageKey) => {
    if (localStorageKey) {
      const local = localStorage.getItem(localStorageKey);
      local ? setLocalData(local) : setIsLocalDataEmpty(true);
    }
  };

  useEffect(() => {
    getData(key);
  }, [key]);

  return { localData, resetLocalData, handleLocalData, isLocalDataEmpty, setKey };
};

export default useLocalStorage;
