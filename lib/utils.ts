import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function classNames(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function isActivePage(pageLink: string, currentPath: string) {
  if (pageLink === "/" && pageLink !== currentPath) {
    return false;
  } else if (currentPath.includes(pageLink)) {
    return true;
  }

  return false;
}
