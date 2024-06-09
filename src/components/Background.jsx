import React from "react";

const Background = ({ children }) => {
  return (
    <div className="from-white via-gray-200 to-gray-300 w-full h-full bg-gradient-to-tl dark:from-gray-900 dark:to-gray-700 dark:bg-gradient-to-tr">
      {children}
    </div>
  );
};

export default Background;
