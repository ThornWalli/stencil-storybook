import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { ExampleButton } from './example-button';

const meta = {
  title: 'ExampleButton',
  component: ExampleButton,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
  },
  args: { }
} satisfies Meta<ExampleButton>;

export default meta;
type Story = StoryObj<ExampleButton>;

export const Primary: Story = {
  args: {},
  render: props => {
    return <ads-button {...props} />;
  }
};
