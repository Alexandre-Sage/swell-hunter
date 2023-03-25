import React from "react";
import Svg, { Path, Line } from "react-native-svg";
import type { SvgInterface } from "./MapMarker";

export const DiamondSvg = ({ height, width }: SvgInterface) => (
  <Svg width={width} height={height} viewBox="0 0 942 734" fill="none">
    <Path
      d="M470.933 723.26L15.0749 267.401L470.933 170.676L926.791 267.401L470.933 723.26Z"
      fill="#2E2A2A"
      stroke="#27789B"
      stroke-width="15"
    />
    <Line
      x1="471"
      y1="178"
      x2="471"
      y2="716"
      stroke="#27789B"
      stroke-width="14"
    />
  </Svg>
);
