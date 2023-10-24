import React from 'react';
import { BaseTypeProps } from '../utils';

export type SpaceSize = number | string;
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
export interface SpaceProps extends BaseTypeProps {
  /** 间距方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /** 交叉轴对齐方式	 */
  align?: SpaceAlign;
  /** 主轴对齐方式 仅在 block 时有效	 */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  /** 是否自动换行，仅在 horizontal 时有效	 */
  wrap?: boolean;
  /** 是否渲染为块级元素	 */
  block?: boolean;
  /**
   * 间距大小
   * 设为数组时则分别设置垂直方向和水平方向的间距大小
   * @default 8px
   */
  size?: SpaceSize | [SpaceSize, SpaceSize];

  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
