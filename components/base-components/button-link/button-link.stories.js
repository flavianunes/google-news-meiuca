import ButtonLink from "./button-link";

export default {
  title: "Components/ButtonLink",
  component: ButtonLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    children: "Default Button",
    href: "https://www.google.com/",
    target: "_blank",
  },
};
