import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
export const variants = cva(
  "duration-300  cursor-pointer  transition-all  hover:scale-105 hover:disabled:scale-100 focus:scale-105 active:scale-95 flex justify-center items-center",
  {
    variants: {
      variant: {
        fill: " bg-stone-900 hover:bg-primary-300 text-white  active:bg-stone-900 shadow-sm shadow-inherit active:shadow-inner",
        outline:
          " border-solid border-stone-900 hover:bg-primary-300  active:bg-stone-900 bg-transparent  shadow-sm  shadow-inherit  border-2 active:shadow-inner  ",
        ghost:
          "  hover:bg-stone-900/80  active:bg-stone-900 hover:text-white  shadow-sm  active:shadow-inner",
      },
      shape: {
        pill: "rounded-full",
        circle: "rounded-full ",
        rect: "rounded-sm",
      },
      disable: {
        default:
          " disabled:text-gray-500   disabled:bg-stone-900-muted disabled:ring-gray-400 ",
        skelaton:
          "disabled:text-gray-400 disabled:ring-4 disabled:bg-gray-400 disabled:active:bg-transparent",
        link: "text-gray-400 ring-gray-400 active:bg-transparent hover:scale-100 cursor-auto",
      },
    },
    defaultVariants: {
      shape: "pill",
      disable: "default",
    },
  }
);
export type variantsType = VariantProps<typeof variants>;
