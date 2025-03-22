import React from "react";

interface GmailIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const GmailIcon: React.FC<GmailIconProps> = ({
  width = 24,
  height = 24,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 5.457V17.5C24 18.875 22.875 20 21.5 20H20V8.514L12 14.5L4 8.514V20H2.5C1.125 20 0 18.875 0 17.5V5.457C0 4.677 0.375 3.927 0.975 3.427C1.575 2.927 2.325 2.772 3.075 3.022L12 8.5L20.925 3.022C21.675 2.772 22.425 2.927 23.025 3.427C23.625 3.927 24 4.677 24 5.457Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GmailIcon;
