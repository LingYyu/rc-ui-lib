import React, { CSSProperties, useContext, useMemo } from 'react';
import classNames from 'classnames';
import { SpaceProps, SpaceSize } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Space: React.FC<SpaceProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('space', prefixCls);

  const { className, style, wrap, children, block, size, direction, align, justify, onClick } =
    props;
  const getMargin = (marginSize: SpaceSize) => {
    if (typeof marginSize === 'number') {
      return `${marginSize}px`;
    }
    return marginSize;
  };
  const getMarginStyle = (isLast: boolean): CSSProperties => {
    const marginStyle: CSSProperties = {};

    const marginRight = `${getMargin(Array.isArray(size) ? size[0] : size)}`;
    const marginBottom = `${getMargin(Array.isArray(size) ? size[1] : size)}`;

    if (isLast) {
      return wrap ? { marginBottom } : {};
    }

    if (direction === 'horizontal') {
      marginStyle.marginRight = marginRight;
    }
    if (direction === 'vertical' || wrap) {
      marginStyle.marginBottom = marginBottom;
    }

    return marginStyle;
  };
  const childList = useMemo(
    () => React.Children.map(children, (c) => c).filter((c) => c !== null && c !== undefined),
    [children],
  );
  return (
    <div
      className={classNames(
        bem({
          wrap,
          block,
          [`${direction}`]: !!direction,
          [`align-${align}`]: !!align,
          [`justify-${justify}`]: !!justify,
        }),
        className,
      )}
      onClick={onClick}
      style={style}
    >
      {childList.map((item, index) => (
        <div
          key={`item-${index}`}
          className={classNames(bem('item'))}
          style={getMarginStyle(index === childList.length - 1)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
Space.defaultProps = {
  direction: 'horizontal',
  size: 8,
};

export default Space;
