import { Browsers } from "../types";
import Google_Chrome_September_2014 from "./Google_Chrome_September_2014"
import Safari from "./Safari"
import Opera_2015 from "./Opera_2015"
import Mozilla_Firefox_2019 from "./Mozilla_Firefox_2019"
import Microsoft_Edge_2020 from "./Microsoft_Edge_2020"
import React from "react";

const svg = {
  chrome: Google_Chrome_September_2014,
  safari: Safari,
  opera: Opera_2015,
  firefox: Mozilla_Firefox_2019,
  edge: Microsoft_Edge_2020,
}

type getBrowser = {
  browser: Browsers,
  className?: string,
  style?: React.CSSProperties,
  size: number | string
}
export const getBrowserIcon = ({ browser, className, style, size }: getBrowser) => {
  const Component = svg[browser]

  return (
    <Component
      className={className}
      style={{
        ...style,
        minWidth: size,
        minHeight: size
      }}
      height={size}
      width={size}
    />
  );
}