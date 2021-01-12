import React from "react";
import { SVGComponent } from "../../types";

export default ({ ...props }: SVGComponent) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Safari"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect width={512} height={512} rx="15%" fill="#fff" />
      <radialGradient id="prefix__a">
        <stop stopColor="#0bd" offset={0} />
        <stop offset={1} stopColor="#17d" />
      </radialGradient>
      <g stroke="#eee" fill="none" transform="matrix(4 0 0 4 256 256)">
        <circle r={52.5} fill="url(#prefix__a)" strokeWidth={5} />
        <circle
          r={45}
          strokeDasharray="1.25 8.175"
          strokeDashoffset={0.5}
          strokeWidth={5.5}
        />
        <circle
          r={42.5}
          strokeDasharray="1.25 7.65"
          strokeDashoffset={5}
          strokeWidth={10}
        />
      </g>
      <path d="M280 280l-48-48-116 156" fill="#eee" />
      <path d="M280 280l-48-48 164-112" fill="#f55" />
      <path opacity={0.3} d="M116 388l28-20-12 20 148-108 112-140-16 8 16-24" />
    </svg>
  );
}