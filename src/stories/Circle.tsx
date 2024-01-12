import React, { FC } from "react";

type Props = {
  /**
   * オレンジはPrimaryです
   */
  variant: "orange" | "green" | "blue";
};

/**
 * プロジェクトで使用する円コンポーネントです
 */
export const Circle: FC<Props> = ({ variant }) => {
  let bgColor;

  switch (variant) {
    case "orange":
      bgColor = "bg-orange-500";
      break;
    case "green":
      bgColor = "bg-green-500";
      break;
    case "blue":
      bgColor = "bg-blue-500";
      break;
  }

  return (
    <button className={`${bgColor} w-40 h-40 p-2 rounded-full`}>Button</button>
  );
};
