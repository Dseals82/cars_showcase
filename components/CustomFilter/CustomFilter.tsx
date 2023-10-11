import React from "react";

interface CustomeFilterProps {
  title: string;
}
const CustomFilter = ({ title }: CustomeFilterProps) => {
  return <div>CustomFilter: {title}</div>;
};

export default CustomFilter;
