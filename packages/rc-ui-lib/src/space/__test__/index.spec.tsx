import React from 'react';
import { render } from '@testing-library/react';
import { Space } from '..';
import { Button } from '../../button';

test('should render space', async () => {
  const { container } = render(
    <Space>
      <Button>按钮</Button>
      <Button>按钮</Button>
      <Button>按钮</Button>
    </Space>,
  );
  const items = container.querySelectorAll<HTMLDivElement>('.rc-space__item');
  expect(items[0].style.marginRight).toBe('8px');
  expect(items[1].style.marginRight).toBe('8px');
  expect(items[2].style.marginRight).toBe('');
});

test('should render vertical', async () => {
  const { container } = render(
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
    </Space>,
  );
  const space = container.querySelector('.rc-space');
  const items = container.querySelectorAll<HTMLDivElement>('.rc-space__item');
  expect(space.className).toContain('rc-space--vertical');
  expect(items[0].style.marginBottom).toBe('8px');
  expect(items[1].style.marginBottom).toBe('8px');
  expect(items[2].style.marginBottom).toBe('');
});

test('should render size 20px', async () => {
  const { container } = render(
    <Space size="20px">
      <Button type="primary" block>
        按钮
      </Button>
      <Button type="primary" block>
        按钮
      </Button>
      <Button type="primary" block>
        按钮
      </Button>
    </Space>,
  );
  const items = container.querySelectorAll<HTMLDivElement>('.rc-space__item');
  expect(items[0].style.marginRight).toBe('20px');
  expect(items[1].style.marginRight).toBe('20px');
  expect(items[2].style.marginRight).toBe('');
});
test('should render size [20px, 10px]', async () => {
  const { container } = render(
    <Space size={[20, 10]} wrap>
      <Button type="primary" block>
        按钮
      </Button>
      <Button type="primary" block>
        按钮
      </Button>
      <Button type="primary" block>
        按钮
      </Button>
    </Space>,
  );
  const items = container.querySelectorAll<HTMLDivElement>('.rc-space__item');
  expect(items[0].style.marginRight).toBe('20px');
  expect(items[0].style.marginBottom).toBe('10px');
  expect(items[1].style.marginRight).toBe('20px');
  expect(items[1].style.marginBottom).toBe('10px');
  expect(items[2].style.marginRight).toBe('');
  expect(items[2].style.marginBottom).toBe('10px');
});

test('should render align start', async () => {
  const { container } = render(
    <Space align="start">
      <Button type="primary" block>
        按钮
      </Button>
      <Button type="primary" block>
        按钮
      </Button>
      <Button type="primary" block>
        按钮
      </Button>
    </Space>,
  );
  const space = container.querySelector('.rc-space');
  expect(space.className).toContain('rc-space--align-start');
});

test('should render wrap', async () => {
  const { container } = render(
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
      <Button type="primary" block>
        按钮
      </Button>
    </Space>,
  );
  const space = container.querySelector('.rc-space');
  expect(space.className).toContain('rc-space--wrap');
});
