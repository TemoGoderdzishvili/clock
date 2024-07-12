"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Clock from "./Clock";

export default function Home() {
  return (
    <Clock />
  )
}
