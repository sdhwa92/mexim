import { ButtonSize } from "../Button";

export default function sizeClasses(size: ButtonSize): string {
  if (size === "xs") {
    return "px-2 py-1 text-xs";
  } else if (size === "sm") {
    return "px-2 py-1 text-sm";
  } else if (size === "md") {
    return "px-2.5 py-1.5 text-sm";
  } else if (size === "lg") {
    return "px-3 py-2 text-sm";
  } else {
    return "px-3.5 py-2.5 text-sm";
  }
}
