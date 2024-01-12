import { Meta, StoryObj } from "@storybook/react";
import { VStack } from "@chakra-ui/react";
import { Circle } from "./Circle";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Example/Circle",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["orange", "green", "blue"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * オレンジの円です
 */
export const BaseCircle: Story = {
  args: {
    variant: "orange",
  },
};
/**
 * グリーンの円です
 */
export const GreenCircle: Story = {
  args: {
    variant: "green",
  },
};
/**
 * ブルーの円です
 */
export const BlueCircle: Story = {
  args: {
    variant: "blue",
  },
};

/**
 * 円の集合体です
 */
export const GroupedCircle: Story = {
  render: () => (
    <VStack>
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="blue" />
    </VStack>
  ),
};
