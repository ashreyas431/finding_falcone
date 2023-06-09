import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, SelectHTMLAttributes, useEffect, useState } from "react";
import { filterPlanetOptions } from "@/lib/utils";
interface DropdownProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof dropdownVariants> {
  options: any[];
  addSelectedOption: any;
  allSelectedPlanets: any[];
  disabled?: boolean;
}

const dropdownVariants = cva(
  " p-4 text-center text-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  {
    variants: {
      variant: {
        default: "p-4"
      }
    }
  }
);

const Dropdown: FC<DropdownProps> = ({
  variant,
  options,
  addSelectedOption,
  allSelectedPlanets,
  disabled
}) => {

  return (
    <div className="flex items-center justify-center m-4 p-4">
      <select
        disabled={disabled}
        className={cn(dropdownVariants())}
        onChange={(e) => {
          console.log(e.target.value);
          e.target.value !== "-1"
            ? addSelectedOption([...allSelectedPlanets, e.target.value])
            : null;
        }}
      >
        <option value="-1">Select a planet</option>
        {options?.map((option: Planet, idx: number) => {
          return (
            <option
              key={idx}
              value={option.name}
              className="text-center rounded-lg"
            >
              {`${option.name} Distance:${option.distance}`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
