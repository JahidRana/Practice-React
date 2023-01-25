import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Pages/Home";
import Protected from "../Router/Protected";
import About from "./About";
import Blog from "./Blog";
import Blogs from "./Blogs";
export default function Layout() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        {IsLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(!IsLoggedIn);
            }}>
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(!IsLoggedIn);
            }}>
            Login
          </button>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/blog"
            element={
              <Protected isLoggedIn={IsLoggedIn}>
                <Blog />
              </Protected>
            }
          />
          <Route path="/blog/:title" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
