import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { InputHTMLAttributes, FC } from "react";

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
}

const RadioGroup: FC<RadioProps> = ({ variant, options }) => {
    return(
        <div className="p-4">Hello</div>
    )
};
export default RadioGroup;
