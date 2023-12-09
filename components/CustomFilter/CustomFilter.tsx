"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

interface CustomeFilterProps {
  title: string;
  options: OptionsProps[];
}
const CustomFilter = ({ title, options }: CustomeFilterProps) => {
  return <div>CustomFilter: {title}</div>;
};

export default CustomFilter;
