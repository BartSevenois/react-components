import React, { useEffect } from "react";

function hasMenuId(element, id) {
  let currentElement = element;

  while (currentElement) {
    if (currentElement.id === id) {
      return true; // Found 'menu' ID
    }
    currentElement = currentElement.parentNode;
  }

  return false; // No 'menu' ID found in the element's parents
}

const useOutsideAlerter = (ref, id ,cb) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (!hasMenuId(event.target, id)) return cb(event);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref])
};

export default useOutsideAlerter;