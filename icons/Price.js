import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      height={48}
      viewBox="0 0 64 64"
      width={48}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G id="_11-best_price" data-name="11-best price">
        <Circle cx={42} cy={22} fill="#ebd557" r={21} />
        <Circle cx={42} cy={22} fill="#fcea81" r={17} />
        <Path
          d="m43 19h-2a3 3 0 0 1 0-6h7a2 2 0 0 0 0-4h-4v-4h-4v4.08a7 7 0 0 0 1 13.92h2a3 3 0 0 1 0 6h-7a2 2 0 0 0 0 4h4v4h4v-4.08a7 7 0 0 0 -1-13.92z"
          fill="#d7986c"
        />
        <Path
          d="m38 45h-1a3 3 0 0 1 0 6h-1a3 3 0 0 1 0 6h-1a3 3 0 0 1 0 6h-17l-7-2v-18c3 0 5-4 5-4l4-14s5 0 5 6l-1 8h14a3 3 0 0 1 0 6z"
          fill="#e7cea0"
        />
        <Path d="m1 41h10v22h-10z" fill="#7bace6" />
        <Path
          d="m42 42a4 4 0 0 0 -4-4h-12.87l.87-6.88a.49.49 0 0 0 0-.12c0-5.54-3.92-7-6-7a1 1 0 0 0 -1 .73l-4 13.89a7.67 7.67 0 0 1 -3 3.17v-.79a1 1 0 0 0 -1-1h-10a1 1 0 0 0 -1 1v22a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-.67l5.73 1.67a.8.8 0 0 0 .27 0h17a4 4 0 0 0 3-6.58 4 4 0 0 0 1-6 4 4 0 0 0 1-6 4 4 0 0 0 2-3.42zm-32 20h-8v-20h8zm25 0h-16.86l-6.14-1.75v-16.37c3-.69 4.81-4.26 4.89-4.43a1.34 1.34 0 0 0 .07-.18l3.77-13.18c1.17.26 3.25 1.23 3.27 4.85l-1 7.94a1 1 0 0 0 .24.78 1 1 0 0 0 .76.34h14a2 2 0 0 1 0 4h-5a1 1 0 0 0 0 2h4a2 2 0 0 1 0 4h-5a1 1 0 0 0 0 2h4a2 2 0 0 1 0 4h-5a1 1 0 0 0 0 2h4a2 2 0 0 1 0 4z"
          fill="black"
        />
        <Path
          d="m13 15h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-1a1 1 0 0 0 -2 0v1h-1a1 1 0 0 0 0 2z"
          fill="black"
        />
        <Path
          d="m54 50h-1v-1a1 1 0 0 0 -2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z"
          fill="black"
        />
        <Path
          d="m42 0a22 22 0 0 0 -22 22 1 1 0 0 0 2 0 20 20 0 1 1 23.81 19.64 1 1 0 0 0 .19 2h.19a22 22 0 0 0 -4.19-43.64z"
          fill="black"
        />
        <Path
          d="m51 26a8 8 0 0 0 -8-8h-2a2 2 0 0 1 0-4h7a3 3 0 0 0 0-6h-3v-3a1 1 0 0 0 -1-1h-4a1 1 0 0 0 -1 1v3.26a8 8 0 0 0 2 15.74h2a2 2 0 0 1 0 4h-7a3 3 0 0 0 0 6h3v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3.26a8 8 0 0 0 6-7.74zm-7.14 5.93a1 1 0 0 0 -.86 1v3.07h-2v-3a1 1 0 0 0 -1-1h-4a1 1 0 0 1 0-2h7a4 4 0 0 0 0-8h-2a6 6 0 0 1 -.86-11.93 1 1 0 0 0 .86-1v-3.07h2v3a1 1 0 0 0 1 1h4a1 1 0 0 1 0 2h-7a4 4 0 0 0 0 8h2a6 6 0 0 1 .86 11.93z"
          fill="black"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
