import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { InputHTMLAttributes, FC } from "react";
import { Radio } from "@nextui-org/react";

const radioGroupVariants = cva("active:scale-110 bg-gray-100", {
  variants: {
    variant: {
      default: "p-2"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export interface RadioProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioGroupVariants> {
  options: any[];
  checked: any;
  setChecked: any;
}

const RadioGroup: FC<RadioProps> = ({ variant, options,checked,setChecked }) => {
  return (
    <Radio.Group label="Select Vehicle" onChange={setChecked} value={checked}>
      {options.map((option) => (
        <Radio key={option.name} value={option.name} size="xs" isDisabled={option.disabled}>
          {option.name} {option.total_no}
        </Radio>
      ))}
    </Radio.Group>
  );
};
export default RadioGroup;
