"use client"
import Header from "@/components/Header/Header";
import Mainpage from "@/components/Mainpage/Mainpage";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type MainContextType = {
  loginStatus: "unregistered" | "logging" | "logged";
  setLoginStatus: Dispatch<
    SetStateAction<"unregistered" | "logging" | "logged">
  >;
};

export const mainContext = createContext<MainContextType | null>(null);

export function useMainContext() {
  const ctx = useContext(mainContext);
  if (!ctx) {
    throw new Error("Could not open mainContext");
  }
  return ctx;
}

export default function Page() {
  const [loginStatus, setLoginStatus] = useState<
    "unregistered" | "logging" | "logged"
  >("unregistered");

  return (
    <mainContext.Provider value={{ loginStatus, setLoginStatus }}>
      <Header />
      <Mainpage />
    </mainContext.Provider>
  );
}
