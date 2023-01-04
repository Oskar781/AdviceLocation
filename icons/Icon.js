import * as React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { G, Path } from "react-native-svg";

export default function TriangleDown(props) {
  return (
    <Svg
      height={200}
      viewBox="0 0 512 512"
      width={200}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M466.054 357.248l-7.191-17.374-82.705-199.766a7.51 7.51 0 00-4.059-4.059L154.78 46.052a7.457 7.457 0 00-5.968.099 7.494 7.494 0 00-4.002 4.427l-13.478 39.826L1.575 473.77l-.035.12c-3.536 10.466-.884 21.829 6.93 29.643 3.91 3.91 8.705 6.527 13.831 7.722 5.127 1.195 10.586.969 15.818-.799l245.922-83.187 13.619-14.072 62.594-11.71 61.463-20.79 39.818-13.471a7.488 7.488 0 004.419-4.01 7.51 7.51 0 00.1-5.968z"
        fill="#f9d11f"
      />
      <Path
        d="M461.536 367.226l-39.818 13.471-61.463 20.79-62.594 11.71-13.619 14.072-245.923 83.187c-5.233 1.768-10.692 1.994-15.818.799-5.127-1.195-9.921-3.811-13.831-7.722-7.814-7.814-10.465-19.178-6.93-29.643l.035-.12a39.704 39.704 0 0038.665 7.581l418.622-141.477 7.191 17.374a7.514 7.514 0 01-4.517 9.978z"
        fill="#ffa402"
      />
      <Path
        d="M461.536 367.226l-39.818 13.471a318.826 318.826 0 00-7.241-25.825c-15.118-46.36-44.782-102.146-101.132-158.511-67.304-67.263-131.142-93.837-181.73-105.688l-.283-.269 13.478-39.826a7.497 7.497 0 014.002-4.427 7.457 7.457 0 015.968-.099l217.319 89.997a7.51 7.51 0 014.059 4.059l82.705 199.766 7.191 17.374a7.514 7.514 0 01-.099 5.968 7.488 7.488 0 01-4.419 4.01z"
        fill="#fdeda5"
      />
      <Path
        d="M461.536 367.226l-39.818 13.471a318.826 318.826 0 00-7.241-25.825l44.386-14.998 7.191 17.374a7.514 7.514 0 01-.099 5.968 7.488 7.488 0 01-4.419 4.01z"
        fill="#fbdf63"
      />
      <Path
        d="M511.352 349.427c-11.144-53.12-42.47-134.483-128.406-220.421C296.996 43.096 215.621 11.785 162.488.64c-15.62-3.274-31.007 6.329-35.059 21.582a38.257 38.257 0 00-.368 1.556c-1.648 7.828-.141 15.812 4.236 22.508a29.748 29.748 0 003.924 4.844c4.066 4.066 9.221 6.873 14.977 8.076 45.185 9.476 114.893 36.615 190.435 112.116 75.513 75.529 102.667 145.224 112.149 190.389a29.727 29.727 0 008.104 14.991l.007.007c7.177 7.177 17.395 10.225 27.316 8.139a27.375 27.375 0 001.563-.375c7.156-1.895 13.273-6.301 17.346-12.538 4.376-6.696 5.875-14.687 4.234-22.508z"
        fill="#f79e60"
      />
      <Path
        d="M511.352 349.427c-11.144-53.12-42.47-134.483-128.406-220.421C296.996 43.096 215.621 11.785 162.488.64c-15.62-3.274-31.007 6.329-35.059 21.582a29.734 29.734 0 0113.845-.368C194.407 32.999 275.782 64.31 361.733 150.22c85.936 85.938 117.262 167.301 128.406 220.421.976 4.653.842 9.37-.368 13.832 7.156-1.895 13.273-6.301 17.346-12.538 4.377-6.696 5.876-14.687 4.235-22.508z"
        fill="#d77d41"
      />
      <G fill="#ed2061">
        <Path d="M237.446 198.649c-.001-12.613-4.912-24.47-13.831-33.39l-.004-.004c-18.417-18.412-48.383-18.412-66.799 0-8.922 8.92-13.835 20.779-13.835 33.395 0 12.613 4.912 24.47 13.831 33.39a.022.022 0 01.004.005c18.417 18.412 48.383 18.412 66.799 0 8.921-8.921 13.834-20.781 13.835-33.396zM198.183 313.74l-.003-.003c-18.417-18.412-48.383-18.412-66.799 0-8.922 8.92-13.836 20.78-13.836 33.395 0 12.613 4.912 24.47 13.831 33.39a.022.022 0 00.005.004c18.417 18.412 48.383 18.412 66.799 0 8.922-8.92 13.835-20.779 13.835-33.395 0-12.613-4.912-24.47-13.832-33.391zM360.262 401.494l-76.277 25.605-3.288-3.288c-5.6-5.601-9.617-12.361-11.837-19.729a47.378 47.378 0 01-1.994-13.662c0-12.615 4.914-24.474 13.831-33.391 9.214-9.2 21.313-13.803 33.404-13.803 12.092 0 24.191 4.603 33.397 13.81 4.872 4.872 8.535 10.586 10.868 16.794 2.715 7.227 3.62 15.104 2.524 23.06z" />
      </G>
      <Path
        d="M360.262 401.494l-76.277 25.605-3.288-3.288c-5.6-5.601-9.617-12.361-11.837-19.729l89.507-30.251c2.715 7.227 3.62 15.104 2.524 23.06z"
        fill="#c71e54"
      />
      <G fill="#68c044">
        <Path d="M113.002 405.492a7.495 7.495 0 00-6.343-6.343c-.592-.086-5.982-.822-12.861-.178-9.857.922-17.959 4.301-23.432 9.772-5.473 5.472-8.854 13.574-9.776 23.43-.644 6.879.093 12.267.179 12.859.238 1.643 1.003 3.109 2.118 4.225s2.582 1.88 4.225 2.119c.591.086 5.981.821 12.861.177 9.857-.922 17.959-4.301 23.432-9.772 5.473-5.472 8.854-13.573 9.776-23.429.643-6.88-.093-12.268-.179-12.86zM285.735 324.238c.219-.557 2.165-5.636 3.107-12.48 1.351-9.807-.093-18.466-4.173-25.041-4.081-6.577-11.199-11.714-20.587-14.858-6.552-2.196-11.967-2.708-12.562-2.759a7.5 7.5 0 00-7.623 4.73c-.219.556-2.164 5.635-3.107 12.479-1.35 9.806.093 18.465 4.173 25.041a28.829 28.829 0 004.136 5.183c4.118 4.118 9.697 7.413 16.45 9.675 6.552 2.196 11.967 2.708 12.562 2.759a7.5 7.5 0 007.624-4.729z" />
      </G>
      <G fill="#fdeda5">
        <Path d="M149.105 271.287l-11.443-17.839a7.5 7.5 0 00-12.626 8.099l11.443 17.839c.298.465.638.886 1.013 1.261a7.502 7.502 0 0011.613-9.36zM309.137 251.439l-16.096-13.79a7.5 7.5 0 00-10.575.816 7.5 7.5 0 00.816 10.575l16.096 13.79a7.5 7.5 0 0010.575-.816c2.696-3.145 2.337-7.894-.816-10.575zM242.59 395.167l2.018-19.334a7.502 7.502 0 00-14.92-1.556l-2.018 19.334a7.486 7.486 0 002.16 6.085 7.5 7.5 0 0012.76-4.529z" />
      </G>
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
