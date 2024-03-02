/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";

type SvgIconProps = {
  size?: string | number;
  width?: string | number; // 添加自定义宽度属性
  height?: string | number; // 添加自定义高度属性
  color?: string;
  prefix?: string;
  name: string;
  ClicK?: any;
};

/**
 * @Svg组件
 * @props  color   图标颜色
 * @props  name 图标名称--文件名称
 * @props  size  图标大小
 * @props  prefix 前缀 默认icon
 * @props  width 自定义宽度（如果设置了size，则忽略此属性）
 * @props  height 自定义高度（如果设置了size，则忽略此属性）
 */

export default function SvgIcon({
  color,
  name,
  size = 16,
  prefix = "icon",
  width,
  height,
  ClicK,
}: SvgIconProps) {
  const symbolId = useMemo(() => `#${prefix}-${name}`, [prefix, name]);

  // 计算最终的宽度和高度
  const finalWidth = width || size;
  const finalHeight = height || size;

  return (
    <svg
      aria-hidden="true"
      width={finalWidth}
      height={finalHeight}
      fill={color}
      onClick={ClicK}
    >
      <use href={symbolId} fill={color} />
    </svg>
  );
}
