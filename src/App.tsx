import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { IRoute, routesList } from "./Routes/Routes";
import Layout from "./Layout/Layout";

const App: React.FC = () => {
  return (
    <div className="flex w-full h-full">
      <BrowserRouter>
      <Layout>
        <Routes>
          {routesList.map((route: IRoute) => (
            <Route key={route.path} element={route.page} path={route.path} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
    </div>
  );
};

export default App;
