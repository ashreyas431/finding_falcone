"use client";
import Header from "@/components/ui/Header";
import { selectVehicles } from "@/slices/appSlice";
import { useSelector } from "react-redux";

export default function Result() {
  console.log(useSelector((state) => (state as any).vehicles));
  return <Header />;
}
