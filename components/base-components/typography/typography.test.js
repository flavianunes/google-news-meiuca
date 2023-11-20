import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Typography from "./typography";
import { Paragraph, Heading, Subtitle } from "./typography.stories";

const { args: headingProps } = Heading;

describe("Typography Component", function () {
  it("should render heading", function () {
    render(<Typography {...headingProps}> Heading </Typography>);
    expect(screen.getByRole("heading")).toHaveTextContent("Heading");
  });
});
