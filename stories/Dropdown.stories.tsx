import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "../components/ui/Dropdown";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI/Dropdown",
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   children: <Button label="test">hello</Button>,
  // },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const OneDropdown: Story = {
  args: {
    children: <Button label="test">hello</Button>,
    items: [
      {
        label: "test",
        onClick: () => console.log("test"),
        icon: (
          <svg>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.5 2.5H5.5V5.5H2.5V2.5ZM2.5 7.5H5.5V10.5H2.5V7.5ZM7.5 2.5H10.5V5.5H7.5V2.5ZM7.5 7.5H10.5V10.5H7.5V7.5ZM12.5 2.5H15.5V5.5H12.5V2.5ZM12.5 7.5H15.5V10.5H12.5V7.5Z"
              fill="currentColor"
            />
          </svg>
        ),
      },
    ],
  },
};
