import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function PressableTrash(props, onPress) {
  return (
    <Svg
      onPress={onPress}
      height={28}
      viewBox="0 0 512 512"
      width={28}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <Circle
        cx={256}
        cy={256}
        fill="#ff3f5b"
        r={256}
        transform="rotate(-45 255.972 256.066)"
      />
      <Path
        d="M337.185 149.911h-35.509V131a10 10 0 00-10-10h-71.352a10 10 0 00-10 10v18.911h-35.509a26.881 26.881 0 00-26.85 26.85v16.849a10 10 0 0010 10h4.3v149.31a38.123 38.123 0 0038.08 38.08h111.31a38.122 38.122 0 0038.083-38.079V203.609h4.3a10 10 0 0010-10V176.76a26.881 26.881 0 00-26.849-26.849zM230.324 141h51.352v8.913h-51.352zm-62.359 35.76a6.94 6.94 0 016.85-6.848h162.37a6.941 6.941 0 016.849 6.85v6.85H167.965zm161.773 176.159A18.1 18.1 0 01311.655 371h-111.31a18.1 18.1 0 01-18.083-18.08V203.609h147.476zM246 342.96V231.649a10 10 0 0120 0V342.96a10 10 0 11-20 0zm-41.869 0V231.649a10 10 0 0120 0V342.96a10 10 0 01-20 0zm83.738 0V231.649a10 10 0 0120 0V342.96a10 10 0 01-20 0z"
        fill="#fff"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default PressableTrash;
