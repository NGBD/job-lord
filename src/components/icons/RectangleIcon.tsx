import React from "react";

interface RectangleIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const RectangleIcon: React.FC<RectangleIconProps> = ({
  width = 100,
  height = 100,
  className = "",
}) => {
  return (
    <svg
      preserveAspectRatio="none"
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" fill="currentColor" />
    </svg>
  );
};

export default RectangleIcon;
