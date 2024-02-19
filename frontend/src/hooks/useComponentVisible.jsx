import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function useComponentVisible(initialIsVisible, addVisibility) {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const [isSecondComponentVisible, setIsSecondComponentVisible] = useState(
    addVisibility
  );
  
  const ref = useRef(null);
  const addRef = useRef(null);
  
  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
      setIsSecondComponentVisible(false)
    }
  };

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
    if (addRef.current && !addRef.current.contains(event.target)) {
      setIsSecondComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, addRef, isComponentVisible, setIsComponentVisible, isSecondComponentVisible, setIsSecondComponentVisible};
}