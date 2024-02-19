"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { useState } from "react";

export type OptionAlieses = {
  placeHolder: string;
  options: string[];
  onGetSelectedValueHandeler: (selectedValue: string) => void;
};
function OnSelectSectionComponent({
  options,
  placeHolder,
  onGetSelectedValueHandeler,
}: OptionAlieses) {
  // State to store the selected value
  const [selectedValue, setSelectedValue] = useState<string>("");

  // Event handler for when the value changes
  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    onGetSelectedValueHandeler(value);
  };

  return (
    <Select value={selectedValue} onValueChange={handleSelectChange}>
      <SelectTrigger className=" w-full text-[.8rem] flex flex-row items-center">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((data, index) => {
            return (
              <SelectItem key={index} value={data}>
                {data}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default OnSelectSectionComponent;
