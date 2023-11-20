import CardContent from "./card-content";

export default {
  title: "Components/CardContent",
  component: CardContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  render: (args) => (
    <CardContent {...args}>
      <CardContent.Header>
        <h1>Title</h1>
      </CardContent.Header>
      <p> Body </p>
      <CardContent.Footer>
        <small>Footer</small>
      </CardContent.Footer>
    </CardContent>
  ),
};
