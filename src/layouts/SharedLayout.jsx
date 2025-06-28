import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../index.css";

export function SharedLayout() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen py-6 bg-background">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
