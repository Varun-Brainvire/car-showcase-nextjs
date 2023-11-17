import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface Manufacturer {
  manufacturer: string;
  //    setManufacturer:React.Dispatch<React.SetStateAction<String>>
  setManufacturer:(manufacturer:string) => void
}
