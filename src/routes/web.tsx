import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/pages/Home";
import Photos from "../components/pages/photos";
import NotFound from "../components/pages/NotFound";

const routeElements = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home />} />
    <Route path='/photos' element={<Photos />} />
    <Route path='*' element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(routeElements);

export default router;