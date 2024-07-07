"use client";

import React from "react";
import useStore from "@/store/store";

export default function CheckOut() {
  const cart = useStore((state) => state.cart);
}
