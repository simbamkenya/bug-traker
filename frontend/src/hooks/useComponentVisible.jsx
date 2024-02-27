import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function useComponentVisible(initialIsVisible, addVisibility, profileVisibility, spaceVisibility, notificationVisibility) {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const [isSecondComponentVisible, setIsSecondComponentVisible] = useState(
    addVisibility
  );
  const [isProfileComponentVisible, setIsProfileComponentVisible] = useState(
    profileVisibility
  );
  const [isSpaceComponentVisible, setIsSpaceComponentVisible] = useState(
    spaceVisibility
  );
  const [isNotificationComponentVisible, setIsNotificationComponentVisible] = useState(
    notificationVisibility
  );
  
  const ref = useRef(null);
  const addRef = useRef(null);
  const profileRef = useRef(null);
  const spaceRef = useRef(null);
  const notificationRef = useRef(null);
  
  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
      setIsSecondComponentVisible(false)
      setIsProfileComponentVisible(false)
      setIsSpaceComponentVisible(false)
      setIsNotificationComponentVisible(false)
    }
  };

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
    if (addRef.current && !addRef.current.contains(event.target)) {
      setIsSecondComponentVisible(false);
    }
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsProfileComponentVisible(false);
    }
    if (spaceRef.current && !spaceRef.current.contains(event.target)) {
      setIsSpaceComponentVisible(false);
    }
    if (notificationRef.current && !notificationRef.current.contains(event.target)) {
   
      setIsNotificationComponentVisible(false);
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

  return { 
    ref,
    addRef, 
    spaceRef,
    profileRef,
    notificationRef,
    isComponentVisible, 
    setIsComponentVisible, 
    isSecondComponentVisible, 
    setIsSecondComponentVisible,
    setIsProfileComponentVisible,
    isNotificationComponentVisible,
    setIsNotificationComponentVisible,
    isProfileComponentVisible,
    isSpaceComponentVisible,
    setIsSpaceComponentVisible,
  };
}