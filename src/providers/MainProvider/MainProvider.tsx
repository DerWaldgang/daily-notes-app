import { FC } from "react";

import Layout from "@/components/layout/Layout";


import { Provider } from "react-redux";
import { store } from "@/store/store";
import ToastProvider from "../ToastProvider/ToastProvider";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

const MainProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <ToastProvider />
        <Layout>{children}</Layout>
      </Provider>
    </>
  );
};

export default MainProvider;
