export default function isActivePage(pageLink: string, currentPath: string) {
  if (pageLink === "/" && pageLink !== currentPath) {
    return false;
  } else if (currentPath.includes(pageLink)) {
    return true;
  }

  return false;
}
