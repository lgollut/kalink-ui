import { Box } from "./box";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Box",
  component: Box,
  args: {
    msg: "Box label",
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {};
