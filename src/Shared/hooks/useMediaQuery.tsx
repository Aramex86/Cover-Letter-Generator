import { useEffect, useState } from "react";

/**
 * Custom hook to check if a media query matches.
 * @param query - The media query string (e.g., "(max-width: 768px)").
 * @returns A boolean indicating whether the media query matches.
 */
export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) =>
      setMatches(event.matches);

    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
