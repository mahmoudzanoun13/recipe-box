import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="relative">
      <div
        onClick={scrollToTop}
        id="to-top"
        className={`fixed bottom-6 right-6 bg-transparent border-solid border-2 border-green-500 hover:bg-green-500 rounded-md p-3 hover:cursor-pointer transform hover:-translate-y-0.5 focus:outline-none z-20 duration-500 ${
          visible ? "inline" : "hidden"
        }`}
      >
        <AiOutlineArrowUp />
      </div>
    </div>
  );
};

export default ToTop;
