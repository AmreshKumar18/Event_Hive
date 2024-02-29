import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import Homepage from "./Components/Homepage";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import Events from "./Components/Events";
import DetailsEvent from "./Components/DetailsEvent";
import Blog from "./Components/Blog";
import Login from "./Components/Login";
import Event_create from "./Admin/Event_create";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/event" element={<Events />} />
      <Route path="/event-details" element={<DetailsEvent />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Event_create />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-3i620m6gld85mbx0.us.auth0.com"
    clientId="4JhSgdESIXfKrZvGjEYYOymEK16sGVJF"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
