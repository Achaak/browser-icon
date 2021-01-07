import React from "react";

interface CustomProps {
  className?: string,
  height?: number | string,
  width?: number | string,
  style?: React.CSSProperties,
}

export default ({ ...props }: CustomProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520.66 520.73"
      {...props}
    >
      <defs>
        <radialGradient
          id="prefix__b"
          cx={324.37}
          cy={624.67}
          r={193.97}
          gradientTransform="matrix(1 0 0 .95 -4.63 -230.51)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.72} stopOpacity={0} />
          <stop offset={0.95} stopOpacity={0.53} />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          id="prefix__d"
          cx={-511.79}
          cy={559.7}
          r={291.31}
          gradientTransform="matrix(.15 -.99 .8 .12 -227.42 -169.11)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.76} stopOpacity={0} />
          <stop offset={0.95} stopOpacity={0.5} />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          id="prefix__e"
          cx={161.71}
          cy={-66.8}
          r={411.68}
          gradientTransform="matrix(-.04 1 -2.13 -.08 -83.22 -70.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#35c1f1" />
          <stop offset={0.11} stopColor="#34c1ed" />
          <stop offset={0.23} stopColor="#2fc2df" />
          <stop offset={0.31} stopColor="#2bc3d2" />
          <stop offset={0.67} stopColor="#36c752" />
        </radialGradient>
        <radialGradient
          id="prefix__f"
          cx={520.72}
          cy={-312.58}
          r={197.96}
          gradientTransform="matrix(.28 .96 -.78 .23 98.62 -270.58)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#66eb6e" />
          <stop offset={1} stopColor="#66eb6e" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id="prefix__a"
          x1={124.05}
          y1={598.95}
          x2={486.65}
          y2={598.95}
          gradientTransform="translate(-4.63 -238.92)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#0c59a4" />
          <stop offset={1} stopColor="#114a8b" />
        </linearGradient>
        <linearGradient
          id="prefix__c"
          x1={315.38}
          y1={441.77}
          x2={88.84}
          y2={688.52}
          gradientTransform="translate(-4.63 -238.92)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#1b9de2" />
          <stop offset={0.16} stopColor="#1595df" />
          <stop offset={0.67} stopColor="#0680d7" />
          <stop offset={1} stopColor="#0078d4" />
        </linearGradient>
      </defs>
      <title>{"Fichier 1"}</title>
      <g data-name="Calque 2">
        <g data-name="Layer 1">
          <path
            d="M469.93 387.5a190.34 190.34 0 01-21.44 9.58 207.07 207.07 0 01-73 13.14c-96.23 0-180.06-66.2-180.06-151.15a64 64 0 0133.41-55.54c-87 3.66-109.41 94.37-109.41 147.51 0 150.25 138.47 165.48 168.31 165.48 16.09 0 40.35-4.68 54.91-9.27l2.66-.9A261 261 0 00480.75 399a8.13 8.13 0 00-10.82-11.47z"
            fill="url(#prefix__a)"
          />
          <path
            d="M469.93 387.5a190.34 190.34 0 01-21.44 9.58 207.07 207.07 0 01-73 13.14c-96.23 0-180.06-66.2-180.06-151.15a64 64 0 0133.41-55.54c-87 3.66-109.41 94.37-109.41 147.51 0 150.25 138.47 165.48 168.31 165.48 16.09 0 40.35-4.68 54.91-9.27l2.66-.9A261 261 0 00480.75 399a8.13 8.13 0 00-10.82-11.47z"
            style={{
              isolation: "isolate",
            }}
            opacity={0.35}
            fill="url(#prefix__b)"
          />
          <path
            d="M215 491a161 161 0 01-46.24-43.4 164.18 164.18 0 0160.05-244c6.35-3 17.19-8.4 31.61-8.13a65.77 65.77 0 0152.24 26.44 64.89 64.89 0 0112.94 38c0-.43 49.74-161.89-162.7-161.89C73.64 97.9.22 182.63.22 257a264.72 264.72 0 0024.63 113.85 260.33 260.33 0 00318 136.48 153.66 153.66 0 01-127.67-16.27z"
            fill="url(#prefix__c)"
          />
          <path
            d="M215 491a161 161 0 01-46.24-43.4 164.18 164.18 0 0160.05-244c6.35-3 17.19-8.4 31.61-8.13a65.77 65.77 0 0152.24 26.44 64.89 64.89 0 0112.94 38c0-.43 49.74-161.89-162.7-161.89C73.64 97.9.22 182.63.22 257a264.72 264.72 0 0024.63 113.85 260.33 260.33 0 00318 136.48 153.66 153.66 0 01-127.67-16.27z"
            style={{
              isolation: "isolate",
            }}
            opacity={0.41}
            fill="url(#prefix__d)"
          />
          <path
            d="M309.79 302.74c-1.64 2.13-6.71 5.08-6.71 11.51 0 5.31 3.46 10.41 9.6 14.7 29.25 20.34 84.38 17.65 84.52 17.65a121.05 121.05 0 0061.56-17 124.81 124.81 0 0061.89-107.54c.53-45.57-16.27-75.88-23.06-89.3C454.49 48.48 361.47 0 260.31 0 118 0 2 114.32 0 256.65c1-74.31 74.84-134.32 162.7-134.32 7.11 0 47.71.69 85.41 20.48 33.23 17.45 50.64 38.52 62.74 59.4 12.57 21.7 14.81 49.12 14.81 60s-5.58 27.15-15.87 40.53z"
            fill="url(#prefix__e)"
          />
          <path
            d="M309.79 302.74c-1.64 2.13-6.71 5.08-6.71 11.51 0 5.31 3.46 10.41 9.6 14.7 29.25 20.34 84.38 17.65 84.52 17.65a121.05 121.05 0 0061.56-17 124.81 124.81 0 0061.89-107.54c.53-45.57-16.27-75.88-23.06-89.3C454.49 48.48 361.47 0 260.31 0 118 0 2 114.32 0 256.65c1-74.31 74.84-134.32 162.7-134.32 7.11 0 47.71.69 85.41 20.48 33.23 17.45 50.64 38.52 62.74 59.4 12.57 21.7 14.81 49.12 14.81 60s-5.58 27.15-15.87 40.53z"
            fill="url(#prefix__f)"
          />
        </g>
      </g>
    </svg>
  );
}