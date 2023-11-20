import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CardContent from "./card-content";

describe("CardContent Component", function () {
  it("should render card content", function () {
    render(
      <CardContent>
        <CardContent.Header>
          <h1>Title</h1>
        </CardContent.Header>
        <p>Body</p>
      </CardContent>
    );

    const title = screen.getByRole("heading", { name: "Title" });
    expect(title).toBeTruthy();

    const body = screen.getByText("Body");
    expect(body).toBeTruthy();
  });
});
