import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  disabled: true,
};
