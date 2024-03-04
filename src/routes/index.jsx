import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Faturalandirma from "~/pages/fatura";

import Home from "~/pages/home";
import Jurnalİslemleri from "~/pages/jurnal";
import TekneKayit from "~/pages/kayit";
import LogOut from "~/pages/logout";
import NotFound from "~/pages/not-found";
import Sozlesme from "~/pages/sozlesme";

import TekneTakip from "~/pages/takip";


const routes = createBrowserRouter([
  // path: '/',
  // element: <MainLayout />,
  // children: [

  {
    index: true,
    element: <Home />,
  },
  {
    path: "kayit",
    element: <TekneKayit />,
  },
  {
    path: "takip",
    element: <TekneTakip />,
  },
  {
    path: "fatura",
    element: <Faturalandirma />,
  },
  {
    path: "sozlesme",
    element: <Sozlesme />,
  },
  {
    path: "jurnal",
    element: <Jurnalİslemleri />,
  },
  {
    path: "logout",
    element: <LogOut />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes