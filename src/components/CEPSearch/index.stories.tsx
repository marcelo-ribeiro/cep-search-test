import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { CEPSearch } from "./";

export default {
  title: "CEPSearch",
  component: CEPSearch,
} as ComponentMeta<typeof CEPSearch>;

const Template: ComponentStory<typeof CEPSearch> = () => <CEPSearch />;

export const Default = Template.bind({});
