import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ButtonLink from "./button-link";
import { Default } from "./button-link.stories";

const { args: defaultProps } = Default;

describe("ButtonLink Component", function () {
  it("should render a link", function () {
    render(<ButtonLink {...defaultProps} />);
    const button = screen.getByRole("link", { name: "Default Button" });
    expect(button).toHaveAttribute("href", "https://www.google.com/");
  });
});
