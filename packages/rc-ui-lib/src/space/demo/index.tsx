/* eslint-disable no-console */
import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import Space, { SpaceAlign } from '..';
import { Button, Radio } from '../..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [align, setAlign] = useState<SpaceAlign>('start');

  return (
    <DemoSection className="demo-space">
      <DemoBlock title="基础用法">
        <Space>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="垂直排列">
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
      </DemoBlock>
      <DemoBlock title="自定义间距">
        <Space size={[20, 10]} wrap style={{ marginBottom: 16 }}>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>
        <Space size="2rem" justify="around">
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="对齐方式">
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
        <Space
          size={20}
          style={{ marginBottom: 16, padding: 16, background: '#f3f2f5' }}
          align={align}
        >
          <Button type="primary">{align}</Button>
          <div style={{ padding: '40px 20px', background: '#fff' }}>Block</div>
        </Space>
      </DemoBlock>
      <DemoBlock title="自动换行">
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
        </Space>
      </DemoBlock>
    </DemoSection>
  );
};
