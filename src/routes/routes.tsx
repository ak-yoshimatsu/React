import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import TopPage from "../pages/TopPage";
import ArticlePage from "../pages/ArticlePage";
import AboutPage from "../pages/AboutPage";
import RouterApp from "./RouterApp";

/**
 * タグ形式
 * createRoutesFromElement()でオブジェクト配列へ変換
 */
const routesElements = createRoutesFromElements(
  <Route path="/" element={<RouterApp />}>
    <Route path="" element={<TopPage />}></Route>
    <Route path="/article" element={<ArticlePage />}></Route>
    <Route path="/about" element={<AboutPage />}></Route>
  </ Route>
)

/**
 * createBrowserRouter(routes, opts)
 * routes: ルート定義
 * opts: 動作オプション
 */
const routing = createBrowserRouter(routesElements)

export default routing