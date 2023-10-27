import React from "react";
import { SideBarAction, TGlobalContext, globalContext } from "../../contexts";
import styles from "./styles.module.css";

function SideBar({ children }: { children: {} }) {
  const { isOpenSideBar } =
    React.useContext<TGlobalContext>(globalContext);

  return (
    <>
      {isOpenSideBar !== SideBarAction.Close && (
        <aside
          className={`flex flex-col justify-between fixed right-0 border border-black rounded-lg pb-2 bg-white ${styles["product-detail"]}`}
        >
            {children}
        </aside>
      )}
    </>
  );
}

export {SideBar};