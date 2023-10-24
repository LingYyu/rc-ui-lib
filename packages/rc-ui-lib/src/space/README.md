# Space 间距

### 介绍

设置元素之间的间距。请升级 `rc-ui-lib` 到 >= 2.1.0 版本来使用该组件。

### 引入

```js
import { Space } from 'rc-ui-lib';
```

## 代码演示

### 基础用法

Space 组件会在各个子组件之间设置一定的间距，默认间距为 `8px`。

```jsx
<Space>
  <Button type="primary">按钮</Button>
  <Button type="primary">按钮</Button>
  <Button type="primary">按钮</Button>
  <Button type="primary">按钮</Button>
</Space>
```

### 垂直排列

将 `direction` 属性设置为 `vertical`，可以设置垂直方向排列的间距。

```jsx
<Space direction="vertical" block>
  <Button type="primary" block>
    按钮
  </Button>
  <Button type="primary" block>
    按钮
  </Button>
  <Button type="primary" block>
    按钮
  </Button>
</Space>
```

### 自定义间距

通过调整 `size` 的值来控制间距的大小。传入 `number` 类型时，会默认使用 `px` 单位；也可以传入 `string` 类型，比如 `2rem` 或 `5vw` 等带有单位的值。

```jsx
// 20px
  <Space size={20} style={{ marginBottom: 16 }}>
    <Button type="primary">按钮</Button>
    <Button type="primary">按钮</Button>
    <Button type="primary">按钮</Button>
  </Space>
  // 2rem
  <Space size="2rem" justify="around">
    <Button type="primary">按钮</Button>
    <Button type="primary">按钮</Button>
    <Button type="primary">按钮</Button>
  </Space>
```

### 对齐方式

通过调整 `align` 的值来设置子元素的对齐方式, 可选值为 `start`, `center` ,`end` ,`baseline`，在水平模式下的默认值为 `center`。

```jsx
import Space, { SpaceAlign } from 'rc-ui-lib';
const [align, setAlign] = useState < SpaceAlign > 'start';
```

```jsx
  <Radio.Group
    value={align}
    direction="horizontal"
    onChange={(val: SpaceAlign) => {
      setAlign(val);
    }}
    style={{ marginBottom: 16 }}
  >
    <Radio name="start">start</Radio>
    <Radio name="center">center</Radio>
    <Radio name="end">end</Radio>
    <Radio name="baseline">baseline</Radio>
  </Radio.Group>
  <Space size={20} style={{ marginBottom: 16, padding: 16, background: '#f3f2f5' }} align={align}>
    <Button type="primary">{align}</Button>
    <div style={{ padding: '40px 20px', background: '#fff' }}>Block</div>
  </Space>
```

### 自动换行

在水平模式下, 通过 `wrap` 属性来控制子元素是否自动换行。

```jsx
<Space wrap>
  <Button type="primary" block>
    按钮
  </Button>
  <Button type="primary" block>
    按钮
  </Button>
  <Button type="primary" block>
    按钮
  </Button>
  <Button type="primary" block>
    按钮
  </Button>
  <Button type="primary" block>
    按钮
  </Button>
  <Button type="primary" block>
    按钮
  </Button>
  <Button type="primary" block>
    按钮
  </Button>
  <Button type="primary" block>
    按钮
  </Button>
</Space>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 间距方向 | _vertical \| horizontal_ | `horizontal` |
| size | 间距大小，如 `20px` `2em`，默认单位为 `px`，支持数组形式来分别设置横向和纵向间距 | _number \| string \| number[] \| string[]_ | `8px` |
| align | 设置子元素的交叉轴对齐方式 | _start \| end \| center \| baseline_ | - |
| wrap | 是否自动换行，仅适用于水平方向排列 | _boolean_ | `false` |
| block | 是否让 Space 变为一个块级元素，填充整个父元素 | _boolean_ | `false` |
| justify | 设置子元素的主轴对齐方式，仅在 block 时有效 | _start \| end \| center \| between \| around\| evenly\| stretch_ | - |

### 类型定义

组件导出以下类型定义：

```js
import type { SpaceProps, SpaceSize, SpaceAlign } from 'rc-ui-lib';
```
