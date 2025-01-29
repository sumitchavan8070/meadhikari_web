"use client";

import React from "react";

const HorizontalScroll = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex space-x-4 py-2">{children}</div>
    </div>
  );
};

export default HorizontalScroll;
