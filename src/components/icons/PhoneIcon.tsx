import React from "react";

interface PhoneIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const PhoneIcon: React.FC<PhoneIconProps> = ({
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
        d="M19.95 21C17.8 21 15.7043 20.5207 13.663 19.562C11.621 18.604 9.81267 17.3373 8.238 15.762C6.66267 14.1873 5.396 12.379 4.438 10.337C3.479 8.29567 3 6.2 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.075 8.725 3.225C8.90833 3.375 9.01667 3.56667 9.05 3.8L9.7 7.3C9.73333 7.53333 9.72933 7.74567 9.688 7.937C9.646 8.129 9.55 8.3 9.4 8.45L7.15 10.75C7.68333 11.7 8.321 12.604 9.063 13.462C9.80433 14.3207 10.6333 15.1167 11.55 15.85L13.75 13.65C13.9 13.5 14.0873 13.3873 14.312 13.312C14.5373 13.2373 14.7667 13.2167 15 13.25L18.2 13.95C18.4333 14 18.625 14.1123 18.775 14.287C18.925 14.4623 19 14.6667 19 14.9V19.95C19 20.25 18.9 20.5 18.7 20.7C18.5 20.9 18.25 21 17.95 21H19.95Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PhoneIcon;
