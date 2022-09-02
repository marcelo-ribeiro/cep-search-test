import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from ".";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "with-label",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: "with-label",
  label: "Input label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "disabled",
  label: "Input label",
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  id: "read-only",
  label: "Input label",
  readOnly: true,
};
