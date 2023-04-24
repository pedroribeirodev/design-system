import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@pedro-marketplace/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/pedroribeirodev.png",
    alt: "Pedro Ribeiro",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
