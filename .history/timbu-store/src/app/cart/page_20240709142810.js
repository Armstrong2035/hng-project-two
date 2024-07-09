"use client";
import React from "react";
import CartPage from "../../../components/checkout/cart/CartPage";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

export default function Page() {
  return (
    <>
      <Header />
      <CartPage />
      <Footer />
    </>
  );
}
