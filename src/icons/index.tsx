import Chrome from "./components/Chrome"
import Safari from "./components/Safari"
import Opera from "./components/Opera"
import Firefox from "./components/Firefox"
import Edge from "./components/Edge"
import IE from "./components/IE"
import Brave from "./components/Brave"
import Samsung from "./components/Samsung"
import React from "react";

const lastVersion = {
  Chrome: Chrome,
  Safari: Safari,
  Opera: Opera,
  Firefox: Firefox,
  Edge: Edge,
  IE: IE,
  Brave: Brave,
  Samsung: Samsung,
}

export const BrowsersList = ["Chrome", "Safari", "Opera", "Firefox", "Edge", "IE", "Brave", "Samsung"]
export type Browsers = keyof typeof lastVersion

type getBrowserIcon = {
  browser: Browsers,
  className?: string,
  style?: React.CSSProperties,
  size: number | string,
}
export const getBrowserIcon = async ({ browser, className, style, size }: getBrowserIcon) => {
  const Component = lastVersion[browser]

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