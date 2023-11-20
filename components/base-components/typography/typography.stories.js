import Typography from "./typography";

export default {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Paragraph = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    tag: "p",
    variant: "paragraph",
  },
};

export const Heading = {
  args: {
    children: "Heading SM",
    tag: "h1",
    variant: "heading",
  },
};

export const Subtitle = {
  args: {
    children: "Subtitle SM",
    tag: "p",
    variant: "subtitle",
  },
};
