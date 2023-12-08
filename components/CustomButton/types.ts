import { MouseEventHandler } from "react";

type BtnType = "button" | "submit" | "reset";
export interface CustomButtonProps {
  title: string;
  btnType?: BtnType;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
