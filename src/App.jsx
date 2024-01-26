import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import { Routes, Route } from "react-router-dom";

import CardList from "./components/card-list/card-list.component";
import NavBar from "./components/navbar/navbar.component";
import Login from "./components/login-form/login-form.component";
import Admin from "./components/admin-page/admin-page.component";
import Services from "./components/services/services.component";
import ProtectedRoute from "./components/routes/protected-route.component";
import ViewCarPage from "./components/view-car-page/view-car-page.component";
//import { car_link } from "./components/card/card.component";

const App = () => {
  //console.log(car_link);
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="" element={<CardList />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/adminpage"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="cars/:car_id/:car_name" element={<ViewCarPage />} />
      </Route>
    </Routes>
  );
};

export default App;
