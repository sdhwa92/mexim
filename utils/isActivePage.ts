export default function isActivePage(pageLink: string, currentPath: string) {
  if (pageLink === "/" && pageLink === currentPath) {
    return true;
  } else if (currentPath.includes(pageLink)) {
    return true;
  }

  return false;
}
