import * as React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";

function Address(props) {
  return (
    <Svg
      height={48}
      viewBox="0 0 60 60"
      width={48}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fillRule="nonzero" fill="none">
        <Path d="M24 0v23l-4 7V4z" fill="#f57c00" transform="translate(1 1)" />
        <Path d="M0 4h20v26H0z" fill="#ff9801" transform="translate(1 1)" />
        <Path
          d="M24 0l-4 4H0L5.75.17A.991.991 0 016.3 0z"
          fill="#9e9e9e"
          transform="translate(1 1)"
        />
        <Path d="M21 0l-4 4h3l4-4z" fill="#707070" transform="translate(1 1)" />
        <Path d="M38 4h20v26H38z" fill="#ff9801" transform="translate(1 1)" />
        <Path d="M55 4h3v26h-3z" fill="#f57c00" transform="translate(1 1)" />
        <Path
          d="M58 4H38l-4-4h17.7c.196.001.388.06.55.17z"
          fill="#9e9e9e"
          transform="translate(1 1)"
        />
        <Path
          d="M52.25.17A.991.991 0 0051.7 0h-3c.196.001.388.06.55.17L55 4h3z"
          fill="#707070"
          transform="translate(1 1)"
        />
        <Path d="M38 4v26l-4-7V0z" fill="#f57c00" transform="translate(1 1)" />
        <Path
          d="M58 44h-7l7 11v1a2 2 0 01-2 2h-3.72a1 1 0 00.86-1.5L43.71 40H58z"
          fill="#ffdc00"
          transform="translate(1 1)"
        />
        <Path
          d="M58 30v10H43.71l9.43 16.5a1 1 0 01-.86 1.5H5.72a1 1 0 01-.86-1.5L14.29 40H0V30h20l4-7h10l4 7z"
          fill="#9e9e9e"
          transform="translate(1 1)"
        />
        <Path
          d="M38 30l-4-7h-3l3.712 6.5a1 1 0 00.868.5zM55 30h3v10h-3zM52.28 58h-3a1 1 0 00.86-1.5l-8.57-15a1 1 0 01.86-1.5h1.28l9.43 16.5a1 1 0 01-.86 1.5z"
          fill="#707070"
          transform="translate(1 1)"
        />
        <Path
          d="M5.72 58H2a2 2 0 01-2-2v-1l7-11H0v-4h14.29L4.86 56.5a1 1 0 00.86 1.5z"
          fill="#ffdc00"
          transform="translate(1 1)"
        />
        <G fill="#00bcd4" transform="translate(1 1)">
          <Rect height={4} rx={1} width={4} x={4} y={16} />
          <Rect height={4} rx={1} width={4} x={12} y={16} />
          <Rect height={4} rx={1} width={4} x={42} y={16} />
          <Rect height={4} rx={1} width={4} x={50} y={16} />
          <Rect height={4} rx={1} width={4} x={4} y={8} />
          <Rect height={4} rx={1} width={4} x={12} y={8} />
          <Rect height={4} rx={1} width={4} x={42} y={8} />
          <Rect height={4} rx={1} width={4} x={50} y={8} />
        </G>
        <Path
          d="M9 23h2a1 1 0 011 1v6H8v-6a1 1 0 011-1zM47 23h2a1 1 0 011 1v6h-4v-6a1 1 0 011-1z"
          fill="sienna"
          transform="translate(1 1)"
        />
        <G fill="#000">
          <Path d="M30 31a1 1 0 001-1v-2a1 1 0 00-2 0v2a1 1 0 001 1zM29 37a1 1 0 002 0v-3a1 1 0 00-2 0zM29 45a1 1 0 002 0v-4a1 1 0 00-2 0zM29 55a1 1 0 002 0v-5a1 1 0 00-2 0zM12 37a1 1 0 000-2H9a1 1 0 000 2zM5 37a1 1 0 000-2H2a1 1 0 000 2zM16 37h3a1 1 0 000-2h-3a1 1 0 000 2zM44 37a1 1 0 000-2h-3a1 1 0 000 2zM51 37a1 1 0 000-2h-3a1 1 0 000 2zM58 37a1 1 0 000-2h-3a1 1 0 000 2zM8 22a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm-2-4h2v2H6zM14 22h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zm0-4h2v2h-2zM46 16h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zm-2 4v-2h2v2zM54 16h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zm-2 4v-2h2v2zM6 14h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm0-4h2v2H6zM14 14h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zm0-4h2v2h-2zM46 8h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zm-2 4v-2h2v2zM54 8h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zm-2 4v-2h2v2z" />
          <Path d="M59.555 4.168L53.807.336A1.993 1.993 0 0052.7 0H35a1 1 0 00-1 1v22h-8V1a1 1 0 00-1-1H7.3a2 2 0 00-1.11.336L.445 4.168A1 1 0 000 5v26a1 1 0 001 1h20a1 1 0 00.868-.5L25.58 25h8.84l3.712 6.5A1 1 0 0039 32h20a1 1 0 001-1V5a1 1 0 00-.445-.832zM55.7 4H39.414l-2-2H52.7zM22 5.414l2-2v20.32l-2 3.5zM7.3 2h15.286l-2 2H4.3zM2 6h18v24h-6v-5a2 2 0 00-2-2h-2a2 2 0 00-2 2v5H2zm8 24v-5h2v5zM36 3.414l2 2v21.821l-2-3.5zM48 30v-5h2v5zm4 0v-5a2 2 0 00-2-2h-2a2 2 0 00-2 2v5h-6V6h18v24zM60 45a1 1 0 00-1-1h-7a1 1 0 00-.844 1.537l7 11a1 1 0 101.688-1.074L53.821 46H59a1 1 0 001-1z" />
          <Path d="M59 40H44.71a1 1 0 00-.868 1.5L53.276 58H6.724l9.434-16.5a1 1 0 00-.868-1.5H1a1 1 0 000 2h12.566L4.987 57.007A2 2 0 006.724 60h46.552a2 2 0 001.737-2.992L46.434 42H59a1 1 0 000-2z" />
          <Path d="M8.876 44.519A1 1 0 008 44H1a1 1 0 000 2h5.178L.156 55.463a1 1 0 001.688 1.074l7-11a1 1 0 00.032-1.018z" />
        </G>
      </G>
    </Svg>
  );
}

export default Address;
