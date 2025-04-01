import React from "react";

function PhoneIcon({ ...props }) {
  return (
    <svg
      width={73}
      height={83}
      viewBox="0 0 73 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64.328 40.945L52.906 55.116 41.501 69.287c-6.873 8.521-18.442 16.074-27.557 11.43l-11.222-5.72a5 5 0 01-1.244-8L13.29 55.372a4.965 4.965 0 016.627-.329l2.9 2.33a8.61 8.61 0 0012.077-1.3l7.56-9.382 7.56-9.383a8.625 8.625 0 00-1.309-12.086l-2.883-2.332a4.957 4.957 0 01-1.1-6.547L53.561 2.33a4.991 4.991 0 018.084-.5l7.985 9.756c6.48 7.923 1.555 20.84-5.302 29.36z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default PhoneIcon;
