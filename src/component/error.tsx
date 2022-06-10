import React from "react";

export const EmmetError: React.FC = () => {
  return (
    <div className="border-2 p-2 bg-blue-100">
      <p className="text-red-600">これはemmetで表示できない文章です</p>
    </div>
  );
};
