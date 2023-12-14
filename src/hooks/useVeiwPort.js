import { useState, useEffect } from "react"


export const useVeiwPort = ({breakPoint}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(window.innerWidth > breakPoint ? true : false);
    useEffect(() => {
      const handleResize = () => {
        const newWidth = window.innerWidth;
        setWindowWidth(newWidth);

        if (newWidth > breakPoint) {
          setIsOpen(true);
        } else if (newWidth <= breakPoint) {
          setIsOpen(false);
        }
      };

      window.addEventListener("resize", handleResize);

      // Clean-up
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [windowWidth]);
    return { isOpen, setIsOpen }
}




