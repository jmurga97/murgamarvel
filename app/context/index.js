"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let dataFromSessionStorage = null;
  if (typeof window !== "undefined") {
    dataFromSessionStorage = sessionStorage.getItem("likes");
  }
  let [likes, setLikes] = useState([]);
  useEffect(() => {
    setLikes(dataFromSessionStorage ? JSON.parse(dataFromSessionStorage) : [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <AppContext.Provider value={{ likes, setLikes }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
