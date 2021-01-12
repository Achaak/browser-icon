# react-browser-icons
Tools to get browser svg.

## Install

```sh
yarn add react-browser-icons
# or
npm i react-browser-icons --save
```

## Change log
[https://github.com/Achaak/react-browser-icons/blob/master/CHANGELOG.md](https://github.com/Achaak/react-browser-icons/blob/master/CHANGELOG.md)

## Functions
### getBrowserIcon
Return the SVG of browser.

Example:
``` js
const Component = getBrowserIcon({ browser: "Chrome", className: "class", style: { marginTop: 42 }, size: 42 })
```

## Variables
### BrowsersList
Return the managed list of browsers.

Example:
``` js
console.log(BrowsersList) // "Chrome" | "Safari" | "Mobile Safari" | "Opera" | "Firefox" | "Edge" | "IE" | "Brave" | "Samsung" | "Chromium"
```

## Crédits
https://github.com/edent/SuperTinyIcons