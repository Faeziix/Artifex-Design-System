import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "@/components/layout/Sidebar";

const meta = {
  title: "ui/Sidebar",
  component: Sidebar,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
