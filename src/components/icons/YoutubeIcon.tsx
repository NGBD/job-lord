import React from "react";

interface YoutubeIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const YoutubeIcon: React.FC<YoutubeIconProps> = ({
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
        d="M23.498 6.186C23.2393 5.2738 22.5041 4.5386 21.5919 4.2799C19.7679 3.8 12 3.8 12 3.8C12 3.8 4.23206 3.8 2.40806 4.2799C1.49587 4.5386 0.760667 5.2738 0.502 6.186C0 8.01 0 12 0 12C0 12 0 15.99 0.502 17.814C0.760667 18.7262 1.49587 19.4614 2.40806 19.7201C4.23206 20.2 12 20.2 12 20.2C12 20.2 19.7679 20.2 21.5919 19.7201C22.5041 19.4614 23.2393 18.7262 23.498 17.814C24 15.99 24 12 24 12C24 12 24 8.01 23.498 6.186Z"
        fill="currentColor"
      />
      <path d="M9.6001 15.6L15.8001 12L9.6001 8.39999V15.6Z" fill="#0D9251" />
    </svg>
  );
};

export default YoutubeIcon;
