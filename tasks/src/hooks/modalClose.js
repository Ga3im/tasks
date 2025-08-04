import { useEffect } from "react";

export const useOutsideClick = (ref, reff, callback) => {
  useEffect(() => {
    const clickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target) && !reff.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [ref, callback]);
};