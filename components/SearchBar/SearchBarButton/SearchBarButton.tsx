import React from "react";
import { SearchBarButtonProps } from "./types";
import Image from "next/image";

const SearchBarButton = ({ otherClasses }: SearchBarButtonProps) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnigying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

export default SearchBarButton;
