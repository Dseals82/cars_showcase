"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "./types";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  return <div>CustomFilter: {title}</div>;
};

export default CustomFilter;
